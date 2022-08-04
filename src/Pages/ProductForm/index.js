import { useForm } from 'react-hook-form'
import productsApi from '../../api/products'
const ProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = async product => {
    const response = await productsApi.saveProduct(product)
    console.log(response)
  }
  return (
    <div className='row'>
      <div className='col-12 col-md-6 offset-md-3'>
        <h2>Aquí puedes crear un producto nuevo para vender</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-dark text-white border rounded p-3'
        >
          <div className='form-group mb-3'>
            <label htmlFor=''>Url de la imagen</label>
            <input
              type='text'
              className='form-control'
              {...register('picture', {
                required: true,
                value:
                  'https://img.freepik.com/foto-gratis/trompo-colorido-sobre-superficie-marron_181624-53506.jpg?w=2000'
              })}
            />
            {errors.picture && errors.picture.type === 'required' && (
              <div classNames='alert alert-warning' role='alert'>
                Este campo es requerido
              </div>
            )}
          </div>
          <div className='form-group mb-3'>
            <label htmlFor=''>Nombre</label>
            <input
              type='text'
              className='form-control'
              {...register('name', {
                required: true,
                value: 'Trompo artesanal'
              })}
            />
            {errors.name && errors.name.type === 'required' && (
              <div classNames='alert alert-warning' role='alert'>
                Este campo es requerido
              </div>
            )}
          </div>
          <div className='form-group mb-3'>
            <label htmlFor=''>Descripción</label>
            <input
              type='text'
              className='form-control'
              {...register('description', {
                required: true,
                value:
                  'El mejor juguete inventado en la historia de la humanidad'
              })}
            />
            {errors.description && errors.description.type === 'required' && (
              <div classNames='alert alert-warning' role='alert'>
                Este campo es requerido
              </div>
            )}
          </div>
          <div className='form-group mb-3'>
            <label htmlFor=''>Precio</label>
            <input
              type='number'
              className='form-control'
              {...register('price', { required: true })}
            />
            {errors.price && errors.price.type === 'required' && (
              <div classNames='alert alert-warning' role='alert'>
                Este campo es requerido
              </div>
            )}
          </div>
          <button type='submit' className='btn btn-primary'>
            Guardar Producto
          </button>
        </form>
      </div>
    </div>
  )
}

export default ProductForm
