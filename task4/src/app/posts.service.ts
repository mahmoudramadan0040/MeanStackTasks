import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PostsService {
  Post_Url :string= "https://jsonplaceholder.typicode.com/posts";
  constructor(private http: HttpClient) { }
  // here fetch all posts form api
  GetallPosts():Observable<IPost[]>{
    return this.http.get<IPost[]>(this.Post_Url);
  }
  // get one post for user (selection post )
  GetOnePost = (id: number):Observable<IPost>=>{
    return this.http.get<IPost>(`${this.Post_Url}/${id}`);
  }


}
export interface IPost{
  id?:number;
  title?:string;
  body?:string;
}
