import { useEffect } from "react";

// Redux Selector / Action
import { useDispatch } from 'react-redux';

// import state selectors
import { set_breadcrumb } from '@/store/streamit/actions'

export const useEnterExit = () => {
  useEffect(() => {
    document.body.classList.add("custom-header-relative");
    return () => {
      document.body.classList.remove("custom-header-relative");
    };
  }, []);
};


export const useBreadcrumb = (name: string = 'View All') => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(set_breadcrumb({ show: true, name: name }))

    return () => {
      dispatch(set_breadcrumb({ show: false, name: '' }))
    }
  }, [])
};
