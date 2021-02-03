import React from 'react'

function Form () {
  return (
    <>
      <div>
        <h1>Enter Details</h1>
      </div>
      <div className='container justify-content-center' style={{ display: 'flex' }}>
        <div style={{ margin: '3rem', width: '30%', textAlign: 'left' }} >
          <form>
            <div className='mb-3'>
              <label htmlFor='income' className='form-label'>Income</label>
              <input type='text' name='income' id='income' className='form-control'/>
            </div>
            <div className='mb-3'>
              <label htmlFor="expenses" className='form-label'>Expenses</label>
              <input type='text' name='expenses' id='expenses' className='form-control'/>
            </div>
            <a href='/' className='btn dload-btn'>Submit</a>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form