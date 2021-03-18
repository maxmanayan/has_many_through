import AxiosContainer from '../components/AxiosContainer'
import List from '../components/List'
import useAxiosOnMount from '../hooks/useAxiosOnMount'




const Skills = (props)=>{
 const {data, loading, error} = useAxiosOnMount('/api/skills') 

 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <List name='SKILLS'
          data={data}
          // renderData={(user) => <User {...user} /> }
        />
     </AxiosContainer>
 )
}

export default Skills