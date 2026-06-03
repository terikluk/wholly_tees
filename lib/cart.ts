'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Product } from './products'

export interface CartItem {
  product: Product
  size: string
  color: string
  quantity: number
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  addItem: (product: Product, size: string, color: string) => void
  removeItem: (productId: string, size: string, color: string) => void
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void
  clearCart: () => void
  openCart: () => void
  closeCart: () => void
  totalItems: () => number
  subtotal: () => number
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,

      addItem(product, size, color) {
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.id === product.id && i.size === size && i.color === color,
          )
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.id === product.id && i.size === size && i.color === color
                  ? { ...i, quantity: i.quantity + 1 }
                  : i,
              ),
              isOpen: true,
            }
          }
          return { items: [...state.items, { product, size, color, quantity: 1 }], isOpen: true }
        })
      },

      removeItem(productId, size, color) {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.product.id === productId && i.size === size && i.color === color),
          ),
        }))
      },

      updateQuantity(productId, size, color, quantity) {
        if (quantity < 1) {
          get().removeItem(productId, size, color)
          return
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.product.id === productId && i.size === size && i.color === color
              ? { ...i, quantity }
              : i,
          ),
        }))
      },

      clearCart: () => set({ items: [] }),
      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      totalItems: () => get().items.reduce((sum, i) => sum + i.quantity, 0),
      subtotal: () => get().items.reduce((sum, i) => sum + i.product.price * i.quantity, 0),
    }),
    { name: 'wholly-tees-cart' },
  ),
)
