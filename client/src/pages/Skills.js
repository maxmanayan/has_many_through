import { Link } from 'react-router-dom'
import AxiosContainer from '../components/AxiosContainer'
import Card from '../components/Card'
import List from '../components/List'
import useAxiosOnMount from '../hooks/useAxiosOnMount'




const Skills = (props)=>{
 const {data, loading, error} = useAxiosOnMount('/api/skills') 

 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
        <List name='SKILLS'
          data={data}
          renderData={(skill) => {
            return(
              <Link to={`/skills/${skill.id}`}>
                <Card header={skill.name}>
                  <p>{skill.description}</p>
                </Card>
              </Link>
          )} }
        />
     </AxiosContainer>
 )
}

export default Skills