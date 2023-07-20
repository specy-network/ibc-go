package types

// CallbackCounter is a struct that keeps track of the number of successful
// and failed callbacks.
type CallbackCounter struct {
	Success uint64
	Failure uint64
}

// NewCallbackCounter returns a new CallbackCounter.
func NewCallbackCounter() *CallbackCounter {
	return &CallbackCounter{
		Success: 0,
		Failure: 0,
	}
}

// IncrementSuccess increments the success counter.
func (c *CallbackCounter) IncrementSuccess() {
	c.Success++
}

// IncrementFailure increments the failure counter.
func (c *CallbackCounter) IncrementFailure() {
	c.Failure++
}

// IsZero returns true if both the success and failure counters are zero.
func (c *CallbackCounter) IsZero() bool {
	return c.Success == 0 && c.Failure == 0
}

// HasSucceeded returns true if the success counter is greater than zero and
// the failure counter is zero.
func (c *CallbackCounter) HasSucceeded() bool {
	return c.Success > 0 && c.Failure == 0
}

// HasFailed returns true if the success counter is zero and the failure counter
// is greater than zero.
func (c *CallbackCounter) HasFailed() bool {
	return c.Success == 0 && c.Failure > 0
}