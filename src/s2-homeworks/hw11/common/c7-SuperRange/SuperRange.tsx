import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                width: 147,
                height: 4,
                color: '#00CC22',
                '& .MuiSlider-thumb': {
                    width: 18,
                    height: 18,
                    backgroundColor: '#fff',
                    border: '1px solid #00CC22',
                    boxShadow: '0px 0px 40px 0px #1D212621',
                    '&:before': {
                        content: '""',
                        display: 'block',
                        width: 6,
                        height: 6,
                        backgroundColor: '#01CB22',
                        borderRadius: '50%',
                        boxShadow: '0px 0px 2px 0px #1D21261A',
                    },
                    '&:hover, &.Mui-focusVisible': {
                        boxShadow: '0 0 0 8px rgba(0, 204, 34, 0.16)',
                    },
                    '&.Mui-active': {
                        boxShadow: '0 0 0 14px rgba(0, 204, 34, 0.16)',
                    },
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                },
                
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
