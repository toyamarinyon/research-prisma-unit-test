import { PrismaClient } from '@prisma/client'
import { mockDeep, mockReset, MockProxy } from 'jest-mock-extended'

import prisma from './client'

jest.mock('./client', (() => {
  console.log('mocking!')
  return {
    __esModule: true,
    default: mockDeep<PrismaClient>(),
  }
}))

beforeEach(() => {
  console.log('hello?')
  mockReset(prismaMock)
})

export const prismaMock = (prisma as unknown) as MockProxy<PrismaClient>
