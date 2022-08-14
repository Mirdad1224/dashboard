import MembersTable from '../components/MembersTable'
import SellTable from '../components/SellTable'

const Tables = () => {
  return (
    <div className='pb-10'>
        <MembersTable />
        <SellTable fullWidth={1} />
    </div>
  )
}

export default Tables