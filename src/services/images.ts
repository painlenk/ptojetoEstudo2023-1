import axios from "axios";
import { IPostsData } from "../types/interfaces/IPostsData";

export async function getImages() {
  try {
    const { data } = await axios.get<IPostsData[]>(
      "https://sujeitoprogramador.com/rn-api/?api=posts"
    );

    return data;
  } catch (e: any) {
    console.log("error request -->", e?.message);
    return [];
  }
}
