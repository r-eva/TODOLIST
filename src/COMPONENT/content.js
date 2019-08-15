import React from 'react'

class Content extends React.Component {

    state = {
        kegiatan: ['makan', 'minum', 'tidur', 'jalan', 'lari']
    }

    tampilKegiatan = () => {
        var jsx = this.state.kegiatan.map((val, idx) => {
            return <tr>
                   <th scope='row'>{(idx+1)}</th>
                   <td>{val.charAt(0).toUpperCase() + val.slice(1, val.length)}</td>
                   <td><input type='button' value='DELETE' className='btn btn-danger' onClick={() => this.delete(idx)}/></td>
                   </tr>
        })
        return jsx
    }
    
    delete = (index) => {
        var newArr = this.state.kegiatan
        newArr.splice(index, 1)
        this.setState({kegiatan: newArr})
    }

    addItem = () => {
        var inputItem = this.refs.inputList.value.toLowerCase()
        if (this.state.kegiatan.includes(inputItem)) {
            alert(`${this.refs.inputList.value} sudah ada Broh!`)
        } else if (inputItem === '') {
            alert('Mohon isi dulu datanya')
        } else {
            var newKegiatan = this.state.kegiatan
            newKegiatan.push(inputItem)
            this.setState({kegiatan: newKegiatan})
            console.log(this.state.kegiatan)
            inputItem = ''
        }
    }

    render () {
        return (
            <div className="container">

                <section className='table-responsive'>
                <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col-1">Nomor</th>
                        <th scope="col-1">Kegiatan</th>
                        <th scope="col-1">Hapus</th>
                    </tr>
                </thead>
                <tbody>
                    {this.tampilKegiatan()}
                </tbody>
                </table>
                </section>

                <section className='row justify-content-md-center'>
                    <div className= 'col-md-3'>
                    <input type='text' placeholder='Masukkan TODO' className='form-control' ref='inputList'/>
                    </div>
                    <div className= 'col-md-2'>
                    <input type='button' value='ADD TODO' className='btn btn-primary btn-md btn-block text-center' onClick={this.addItem}/>
                    </div>
                </section>

                <section className='row justify-content-md-center mt-2'>
                    <h5> {this.state.kegiatan.length} Items</h5>
                </section>

            </div>        
        )
    }
}

export default Content