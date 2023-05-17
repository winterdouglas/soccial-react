const low = require("lowdb");
const url = require("url");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = new FileSync("db.json");

const db = low(adapter);
db.defaults({ posts: [], users: [], groups: [] });

function parseId(str) {
  let parsed = new Number(str);
  if (isNaN(parsed)) {
    parsed = str;
  }
  return parsed;
}

function all(db, key) {
  return db.get(`${key}`, []).value();
}

function get(db, key, id) {
  return db.get(`${key}`).getById(id).value();
}

function search(db, key, param) {
  return db.get(`${key}`).find(param).value();
}

function insert(db, key, data) {
  db.get(`${key}`).push(data).write();
  return data;
}

function update(db, key, id, partial) {
  db.get(`${key}`).updateById(id, partial).write();
  return get(db, key, id);
}

function remove(db, key, id) {
  return db.get(`${key}`).removeById(id).write();
}

function notFound(res) {
  res.status(404).send({
    error: {
      code: "ERROR_NOT_FOUND",
      message: "Not found",
    },
  });
}

module.exports = (req, res, next) => {
  const uri = url.parse(req.url);
  let pathname = uri.pathname;

  if (pathname.startsWith("/")) {
    pathname = pathname.substring(1);
  }

  const segments = pathname.split(/\/+/);
  const [collection, id] = segments;
  const parsedId = parseId(id);

  switch (req.method) {
    case "GET":
      if (segments.length !== 1 && segments.length !== 2) {
        throw new Error(`path not supported: ${pathname}`);
      }

      if (segments.length === 1 && Object.keys(req.query || {}).length) {
        const list = search(db, collection, req.query);
        return res.status(200).send(list);
      }
      // Get all resources.
      else if (segments.length === 1) {
        const list = all(db, collection);
        return res.status(200).send(list);
      }

      // Get a specific resource.
      if (segments.length === 2) {
        const item = get(db, collection, parsedId);
        if (item) {
          return res.status(200).send(item);
        } else {
          return notFound(res);
        }
      }

      break;
    case "POST":
      if (segments.length !== 1) {
        throw new Error(`path not supported: ${pathname}`);
      }

      // Create a new resource.
      const inserted = insert(db, collection, req.body);
      return res.status(201).send(inserted);

    case "PUT":
      if (segments.length !== 2) {
        throw new Error(`path not supported: ${pathname}`);
      }

      const updated = update(db, collection, parsedId, req.body);
      return res.status(200).send(updated);

    case "DELETE":
      if (segments.length !== 2) {
        throw new Error(`path not supported: ${pathname}`);
      }

      const deleted = remove(db, collection, parsedId);

      if (deleted) {
        return res.status(200).send(deleted);
      } else {
        return notFound(res);
      }
  }
};
