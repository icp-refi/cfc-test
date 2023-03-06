
import { FetchBasedService } from "../base/fetchBased.service";

import type { Filter } from "../types/filter"
import Cookies from 'js-cookie'

export type User = {
  id: number
  firstname: string
  lastname: string
  email: string
  system: boolean
  roleId?: number,
  createdAt: Date
  updatedAt: Date,
  walletAddress: string
}

export type PaginatedUsers = {
  data: User[],
  meta: PaginationData
}

export default class UserService extends FetchBasedService {
  constructor(params: {
    fetch: any
  }) {
    super({
      fetch: params.fetch,
    })
  }

  async list(params: {
    page: number,
    perPage: number,
    filters?: Filter[]
  }): Promise<PaginatedUsers> {
    let response: PaginatedUsers = await this.get({
      url: '/users',
      params: {
        page: params.page,
        perPage: params.perPage,
        filters: params.filters
      }
    })

    response.data.map((el) => {
      el.createdAt = new Date(el.createdAt)
      el.updatedAt = new Date(el.updatedAt)
      return el
    })

    return response
  }

  async create(params: {
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    roleId?: number
  }) {
    let response = await this.post({
      url: '/users',
      body: {
        firstname: params.firstname,
        lastname: params.lastname,
        email: params.email,
        password: params.password,
        roleId: params.roleId
      }
    })

    return response
  }

  async update(params: {
    id: number,
    firstname?: string,
    lastname?: string,
    email?: string,
    password?: string,
    roleId?: number | null
  }) {
    let response = await this.put({
      url: '/users/' + params.id,
      body: params
    })

    return response
  }

  async show(params: {
    id: number
  }) {
    let response = await this.get({
      url: '/users/' + params.id
    })

    return response
  }
}