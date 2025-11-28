import api from '../utils/axiosConfig';

export const authService = {
  login: async (username, password) => {
    try {
      const response = await api.post('/auth/login', {
        username,
        password
      });
      
      // Código JWT inutilizado - ahora usa localStorage
      // if (response.data.token) {
      //   localStorage.setItem('token', response.data.token);
      //   
      //   // Decodificar el JWT para obtener roles
      //   const roles = authService.getUserRoles(response.data.token);
      //   const isAdmin = roles.includes('ADMIN');
      //   
      //   // Guardar info del usuario con roles correctos
      //   const userData = {
      //     username: username,
      //     token: response.data.token,
      //     isAdmin: isAdmin
      //   };
      //   localStorage.setItem('login', JSON.stringify(userData));
      // }
      
      // Nueva implementación con localStorage
      if (response.data) {
        const userData = {
          username: username,
          email: username === 'admin' ? 'admin@pasteleria.com' : `${username}@example.com`,
          isAdmin: username === 'admin'
        };
        localStorage.setItem('login', JSON.stringify(userData));
      }
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Login failed:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Error al iniciar sesión' 
      };
    }
  },

  register: async (username, password) => {
    try {
      const response = await api.post('/auth/register', {
        username,
        password
      });
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Register failed:', error);
      return { 
        success: false, 
        error: error.response?.data?.message || 'Error al registrarse' 
      };
    }
  },

  logout: () => {
    // Código JWT inutilizado
    // localStorage.removeItem('token');
    localStorage.removeItem('login');
    window.location.href = '/login';
  },

  // getToken: () => {
  //   return localStorage.getItem('token');
  // },

  isLoggedIn: () => {
    // Código JWT inutilizado - ahora usa localStorage
    // return !!localStorage.getItem('token');
    const loginData = JSON.parse(localStorage.getItem('login') || '{}');
    return !!loginData.username;
  },

  // Código JWT inutilizado - ahora usa localStorage
  // getUserRoles: (token = null) => {
  //   const jwtToken = token || localStorage.getItem('token');
  //   if (!jwtToken) return [];

  //   try {
  //     const payload = JSON.parse(atob(jwtToken.split('.')[1]));
  //     console.log('JWT Payload:', payload); // Debug
  //     return payload.roles || [];
  //   } catch (error) {
  //     console.error('Error decoding token:', error);
  //     return [];
  //   }
  // },

  isAdmin: () => {
    const loginData = JSON.parse(localStorage.getItem('login') || '{}');
    return loginData.isAdmin === true;
    
    // Código JWT inutilizado - fallback
    // if (loginData.isAdmin !== undefined) {
    //   return loginData.isAdmin;
    // }
    // 
    // const roles = authService.getUserRoles();
    // console.log('User roles:', roles); // Debug
    // return roles.includes('ADMIN');
  }
};
