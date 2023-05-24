import { useState } from 'react';
import { AiOutlineCheckCircle } from 'react-icons/ai';

interface CheckButtonProps {
  label: string;
}

const CheckButton: React.FC<CheckButtonProps> = ({ label }) => {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked(!checked);
  };

  return (
    <div onClick={handleCheck} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', }}>
      <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '1px solid #42A5F5', marginRight: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {checked && <AiOutlineCheckCircle style={{ color: '#42A5F5', fontSize: '18px' }} />}
      </div>
      
      {checked ? <s>{label}</s> : <span  style={{flexShrink: 100 }}>{label}</span>}

    </div>
  );
};

export default CheckButton;
