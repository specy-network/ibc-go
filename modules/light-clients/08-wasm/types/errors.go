package types

import errorsmod "cosmossdk.io/errors"

var (
	ErrInvalid              = errorsmod.Register(ModuleName, 2, "invalid")
	ErrInvalidData          = errorsmod.Register(ModuleName, 3, "invalid data")
	ErrInvalidCodeHash      = errorsmod.Register(ModuleName, 4, "invalid code hash")
	ErrInvalidClientMessage = errorsmod.Register(ModuleName, 5, "invalid client message")
	// Wasm specific
	ErrWasmEmptyCode             = errorsmod.Register(ModuleName, 6, "empty wasm code")
	ErrWasmCodeTooLarge          = errorsmod.Register(ModuleName, 7, "wasm code too large")
	ErrWasmCodeExists            = errorsmod.Register(ModuleName, 8, "wasm code already exists")
	ErrWasmCodeHashNotFound      = errorsmod.Register(ModuleName, 9, "wasm code hash not found")
	ErrWasmSubMessagesNotAllowed = errorsmod.Register(ModuleName, 10, "execution of sub messages is not allowed")
)