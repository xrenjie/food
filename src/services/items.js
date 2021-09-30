import http from "../http-common";

class ItemDataService {
  getAll() {
    return http.get("");
  }

  newSuggestion(item) {
    return http.post("", item);
  }
}

export default new ItemDataService();
