import axios from 'axios'
import { useState } from 'react'
import { useParams } from 'react-router'
import { Form, Select } from 'semantic-ui-react'
import AxiosContainer from '../components/AxiosContainer'
import Button from '../components/Button'
import LoaderAndError from '../components/LoaderAndError'
import StringifyJson from '../components/StringifyJSON'
import useAxiosOnMount from '../hooks/useAxiosOnMount'




const UserShow = (props)=>{
  const {id} = useParams()
  const {data, loading, error} = useAxiosOnMount(`/api/users/${id}`) 
  const [show, setShow] = useState(false)
  const [skillID, setSkillID] = useState(null)
  const [grade, setGrade] = useState(0)

  // if (loading || error){
  //   return <LoaderAndError fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'} />
  // }

  const handleChange = (event, data) => {
    setSkillID(data.value)
  }

  const handleSubmit = async () => {
    try {
      let res = await axios.post('/api/grades', {user_id: id, skill_id: skillID, score: grade})
    } catch (err) {
      console.log(err)
    }
  }

  const getSkillOptions = () => {
    return data.ungraded_skills.map( d=> {
      return {key: d.name, value: d.id, text: d.name}})
  }

 return (
     <AxiosContainer fullError loading={loading} error={error} loaderMessage={'Loading URL, please wait'}>
       {data && <h1>{data.user.name}</h1>}

       <Button onClick={()=>setShow(!show)}>Add Skill with Grade</Button>
       {show && 
       <div>
          <p>Add a skill</p>
          
          <Form onSubmit={handleSubmit}>
            <Form.Field>
              <label>Grade</label>
              <input value={grade} onChange={(e) => setGrade(e.target.value)} type='number' min='0' max='100' placeholder={'Grade'}/>
            </Form.Field>
            <Form.Field>
              <Select onChange={handleChange} placeholder={data.ungraded_skills ? 'Select Skill' : 'All Skills Graded'} options={getSkillOptions()}/>
            </Form.Field>
            <Button type='submit' >Submit</Button>
          </Form>

       </div>
       }

        {data && <StringifyJson json={data.skills}/>}

        {data && 
        <div>
          <h1>Ungraded Skills</h1>
          <StringifyJson json={data.ungraded_skills}/>
        </div>
        }


        {/* <div>
          {data.user.name}
        </div> */}
     </AxiosContainer>
 )
}

export default UserShow;