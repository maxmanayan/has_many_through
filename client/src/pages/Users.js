import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List'
import useAxiosOnMount from '../hooks/useAxiosOnMount'




const Users = (props)=>{
 const {data, loading, error} = useAxiosOnMount('/api/users') 

 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <List name='USERS'
          data={data}
          // renderData={(user) => <User {...user} /> }
        />
     </AxiosContainer>
 )
}

export default Users