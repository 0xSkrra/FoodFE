import { Dialog, Transition } from "@headlessui/react"
import React, { Fragment, useState } from "react"
import { FloatLabelInput } from "../utilities/FloatLabelInput"
interface ForgotPasswordModalProps {
  isOpen: boolean
  setIsOpen: () => void
}
const ForgotPasswordModal = ({
  isOpen,
  setIsOpen,
}: ForgotPasswordModalProps) => {
  const [email, setEmail] = useState("")
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 min-w-1/2 min-h-1/2"
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed  min-w-1/2 min-h-1/2 inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-full p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="h-96 max-w-lg p-6 overflow-hidden text-left align-middle transition-all transform dialog-panel-bg shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg standard-text-color font-bold leading-6"
                >
                  Reset Password
                </Dialog.Title>
                <div className="mt-8">
                  <p className="text-sm standard-text-color ">
                    Please submit your email and we will email you,
                    with further steps needed to recover your account!
                  </p>
                </div>
                <div className="mt-4 mb-4 modal-input-background">
                  <FloatLabelInput
                    label={"Email"}
                    id={"email-reset-form"}
                    value={email}
                    onChange={(v) => setEmail(v.target.value)}
                  />
                </div>
                <div className="mt-4 flex flex-col items-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={() => setIsOpen}
                  >
                    submit
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ForgotPasswordModal
