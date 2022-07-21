import { useState } from "react";
import {DateObject} from "../../interface";

type TaskObjectType = {
  text: string,
  sign: string,
  tz: string,
  date: DateObject,
  index: number
}

export const usePagination = (data: Array<TaskObjectType>, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / (itemsPerPage || 1))

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    
    return data.slice(begin, end);
  }

  const jump = (page: number) => {
    const pageNumber = Math.max(1, page);

    setCurrentPage(() => Math.min(pageNumber, maxPage));
  }

  const next = () => {
    setCurrentPage(currentPage => jump(currentPage + 1) as unknown as number);
  }

  const prev = () => {
    setCurrentPage(currentPage => jump(currentPage - 1) as unknown as number);
  }

  return { next, prev, jump, currentData, currentPage, maxPage };
}

