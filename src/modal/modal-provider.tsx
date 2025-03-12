"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import CommonModal from "./common-modal"

type ModalVariant = "success" | "error" | "form"

interface ModalOptions {
  variant: ModalVariant
  title: string
  subtitle?: string
  primaryButtonText?: string
  secondaryButtonText?: string
  onPrimaryAction?: (value?: string) => void
  onSecondaryAction?: () => void
  showCloseButton?: boolean
  inputLabel?: string
  inputPlaceholder?: string
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl" | false
  fullWidth?: boolean
}

interface ModalContextType {
  showModal: (options: ModalOptions) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | undefined>(undefined)

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalOptions, setModalOptions] = useState<ModalOptions>({
    variant: "success",
    title: "",
  })

  const showModal = (options: ModalOptions) => {
    setModalOptions(options)
    setModalOpen(true)
  }

  const closeModal = () => {
    setModalOpen(false)
  }

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}

      <CommonModal open={modalOpen} onClose={closeModal} {...modalOptions} />
    </ModalContext.Provider>
  )
}

