import { Link } from 'react-router-dom'
import AxiosContainer from '../components/AxiosContainer'
import Card from '../components/Card'
import List from '../components/List'
import useAxiosOnMount from '../hooks/useAxiosOnMount'




const Users = (props)=>{
 const {data, loading, error} = useAxiosOnMount('/api/users') 

 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <List name='USERS'
          data={data}
          renderData={(user) => {
            return(
              <Link to={`/users/${user.id}`}>
                <Card>
                  <p>{user.name}</p>
                </Card>
              </Link>
          )} }
        />
     </AxiosContainer>
 )
}

export default Users