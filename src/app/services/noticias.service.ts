import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { RespuestaTopHeadlines } from "../interfaces/interfaces";

@Injectable({
  providedIn: "root",
})
export class NoticiasService {
  constructor(private http: HttpClient) {}

  getTopHeadlines() {
    return this.http.get<RespuestaTopHeadlines>(
      `http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=b6d2ab8cf8034b39a88d533aadcb6208`
    );
  }
}
