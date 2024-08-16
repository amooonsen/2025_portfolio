import axios, { AxiosInstance, AxiosProgressEvent } from "axios";
import { useLoadingStore } from "@/store/loadingStore";

export const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

const loadPreResource = async (url: string) => {
  const { data } = await api.get(url, {
    onDownloadProgress: (progressEvent: AxiosProgressEvent) => {
      const total = progressEvent.total;
      const current = progressEvent.loaded;
      const progress = Math.floor((current / total) * 100);
      useLoadingStore.getState().setProgress(progress);
    },
  });
  return data;
};
