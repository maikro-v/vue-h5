import NProgress from 'nprogress';

export const useNprogress = () => {
    const start = () => {
        NProgress.start();
    }

    const done = () => {
        NProgress.done();
    }

    return {
       start,
       done 
    }
}

