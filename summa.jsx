import { IoMdAnalytics, iogear } from 'react-icons/io'
import { RiMoneyRupeeCircleFill } from 'react-icons/ri'
import { FaUsersGear } from 'react-icons/fa6'
import { FaCalendarAlt } from 'react-icons/fa'
import { MdOutlineMobileFriendly } from 'react-icons/md'
import { GrShieldSecurity } from 'react-icons/gr'
      <i>
        <RiMoneyRupeeCircleFill />
      </i>
      <i>
        <IoMdAnalytics />
      </i>
      <i>
        <FaCalendarAlt />
      </i>
      <i>
        <MdOutlineMobileFriendly />
      </i>
      <i>
        <GrShieldSecurity />
      </i>
        function slider(params) {
          if (index < 2) {
            setIndex((index += 1))
          } else {
            setIndex(0)
          }
          console.log(index)
        }
        useEffect(setInterval(slider, 5000), [index])