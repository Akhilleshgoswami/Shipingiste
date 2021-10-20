class ApiFeactures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            // this is case insensatvie
            $options: "i",
          },
        }
      : {};
    console.log(keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const queryCopy = { ...this.queryStr };
    // removing some filed for catorgary
    const removeFiled = ["keyword", "page", "limit"];

    removeFiled.forEach((key) => delete queryCopy[key]);

    console.log(queryCopy);
    // fillter all price  and rating
    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|It|Ite)\b/g, (key) => `$${key}`);

    console.log(queryStr);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }
  // pagination
  pagination(resultperapge) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultperapge * (currentPage - 1);

    this.query = this.query.limit(resultperapge).skip(skip);

    return this;
  }
}
export default ApiFeactures;
