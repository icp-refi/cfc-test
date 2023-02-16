// import { writable } from "svelte/store";
// import { browser } from "$app/environment";
// import type { User } from "../services/user/user.service";
// import AuthService from "$lib/services/auth/auth.service";
// import socketService from "$lib/services/socket/socket.service";

// let store = writable<User | undefined>(undefined)
// export default store

// store.subscribe((newUser) => {
//   if(browser) {
//     if(!!newUser) {
//       let service = new AuthService({ fetch })
//       if (!!service.authToken) {
//         socketService.connect({ token: service.authToken })
//       }
//     } else {
//       socketService.disconnect()
//     }
//   }

// })
