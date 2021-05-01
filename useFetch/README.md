# useFetch Hook

Ejemplo:
```
    const url = 'endpoint de una api';
    
    // Desestructuración del state devuelto:
    const { data: null, loading: true, error: null } = useFetch(url);
```