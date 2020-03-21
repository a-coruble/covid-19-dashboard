import axios, { AxiosError, AxiosRequestConfig } from "axios";

import { GlobalBrief, Covid19Informations } from "./types";

interface LatestInformationsRequestParams {
  iso3?: string;
  onlyCountries?: boolean;
}

const apiClient = axios.create({
  baseURL: "https://wuhan-coronavirus-api.laeyoung.endpoint.ainize.ai/jhu-edu",
  responseType: "json",
  headers: {
    "Content-Type": "application/json"
  }
});

export const getBrief = async () => {
  try {
    const response = await apiClient.get<GlobalBrief>("/brief");
    const globalBrief = response.data;
    return globalBrief;
  } catch (err) {
    if (err && err.response) {
      const axiosError = err as AxiosError;
      return axiosError.response?.data;
    }
  }
};

export const getLatestInformations = async ({
  iso3,
  onlyCountries
}: LatestInformationsRequestParams) => {
  try {
    const response = await apiClient.get<Covid19Informations[]>("/latest", {
      params: {
        iso3,
        onlyCountries
      }
    });
    const informations = response.data;
    return informations;
  } catch (err) {
    if (err && err.response) {
      const axiosError = err as AxiosError;
      return axiosError.response?.data;
    }
  }
};
