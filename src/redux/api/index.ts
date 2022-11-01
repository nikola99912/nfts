export const api = <T>(url: string, method?: string): PromiseLike<T>  =>
  fetch(`https://test-api.dev.kalao.io/${url}`, {
    method: method ?? 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }).then((res: any) => res.json());
