import { browser } from "$app/environment";
import { FetchBasedService } from "../base/fetchBased.service";
import Cookies from 'js-cookie'
import user from "$lib/stores/user";
import type { User } from "../user/user.service";

export type LoginParams = {
  data: {
    email: string,
    password: string
  },
  context?: {}
}

export type SignupParams = {
  data: {
    email: string,
    password: string,
    name: string
  },
  context?: {}
}

export type WalletInfo = {
  data: {
    address: string,
    name: string
  }
}

export type SignupMetamaskParams = {
  data: {
    email: string,
    password: string,
    walletAddress: string|undefined,
    name:string
  },
  context?: {}
}


export default class AuthService extends FetchBasedService {

  constructor(params: {
    fetch: any
  }) {
    super({
      fetch: params.fetch,
    })
  }


  async login(params: LoginParams) {
    if(browser) {
      const response = await this.post({
        url: '/auth/login',
        body: {
          email: params.data.email,
          password: params.data.password
        }
      })

      Cookies.set(this.coockieName, response.token, {
        expires: new Date(response.expires_at),
        sameSite: 'strict'
      })

      await this.setUser()
      return response
    }
  }

  async setUser() {
    if(browser && this.authCookiePresent() && this.walletAddressCookiePresent()) {
      let currentUser: User = await this.me();
      user.update(user => {
        user = currentUser
        return user
      })
    }
  }

  authCookiePresent(): boolean {
    return browser && !!Cookies.get(this.coockieName)
  }

  walletAddressCookiePresent(): boolean {
    return browser && !!Cookies.get(this.cookieWalletAddress)
  }

  walletAddressCookie(): string|undefined {
    return Cookies.get(this.cookieWalletAddress)
  }

  async me(): Promise<User> {
    let response
    try {
      response = await this.get({
        url: '/auth/me',
      })
    } catch(error) {
      throw new Error('unable to get user')
    }

    return {
      id: response.id,
      email: response.email,
      firstname: response.firstname,
      lastname: response.lastname,
      role: response.role,
      roleId: response.roleId,
      system: response.system,
      createdAt: new Date(response.createdAt),
      updatedAt: new Date(response.updatedAt),
      walletAddress: response.walletAddressghjbv 
    }
  }

  async logout(): Promise<void> {
    if(this.authCookiePresent()) {
      Cookies.remove(this.coockieName)
      user.set(undefined)
    }
  }

  async loginWithGoogle() {
    if (browser) {
      window.location.href = this.urls.api + '/auth/google/redirect'
    }
  }

  async loginWithMetamask():Promise<WalletInfo> {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        
        console.log(accounts)
        if (accounts.length > 0) {
          
          let expired_at:Date = new Date();
          Cookies.set(this.cookieWalletAddress, accounts[0], {
            expires: expired_at.setDate(expired_at.getDate() + 1),
            sameSite: 'strict'
          })

          await this.setUser()

          return {
            data: {
              address: this.cookieWalletAddress,
              name: ''
            }
          }
        } else {
          alert('No accounts found');
          return {
            data: {
              address: '',
              name: ''
            }
          }
        }
      } else {
        alert('No ethereum wallet found');
        return {
          data: {
            address: '',
            name: ''
          }
        }
      }
    }

  async signup(params: SignupParams) {
    if (browser) {
      const response = await this.post({
        url: '/auth/signup',
        body: {
          email: params.data.email,
          password: params.data.password,
          name: params.data.name
        }
      })

      return response
    }
  }

  async signupWithMetamask(params: SignupMetamaskParams) {
    if (browser) {
      const response = await this.post({
        url: '/auth/signup',
        body: {
          email: params.data.email,
          password: params.data.password,
          walletAddress: params.data.walletAddress,
          name: params.data.name
        }
      })

      return response
    }
  }
  

  async loginWithMetamaskCallback(params: { token: string, expiresAt: Date }) {
    
  }
}