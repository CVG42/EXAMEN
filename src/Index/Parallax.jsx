import React from 'react'
import './Home.css'
import { Tooltip } from 'antd';
import PropTypes from 'prop-types' 

export const Parallax = ({titulo, t5 , t1, t2, t3, t4}) => {
  return (
    <div>
        <div className='img-1'>
            <div className='caption'>
                <span className='border'>{titulo}</span>
            </div>
        </div>

        <div className='section'>
            <h3 className='border'>{t1}</h3>
            <div className='row'>
                <div className='col'>
                    <img className='unity-logo' src="../unity-logo.png" alt="unity" />
                </div>
            </div>
        </div>

        <div className='img-2'>
            <div className='caption'>
                <span className='border'>{t2}</span>
            </div>
        </div>

        <div className='section'>
            <h3 className='border'>{t2}</h3>
            <p className='descripcion'>Juego de plataformas desarrollado en Unity 2D.</p>
            <Tooltip title='Repositorio'>
                <a href="https://github.com/CVG42/CapybaraParty" target='_blank'>
                    <img className='capy-repo' src="../githublogo.png" alt="github" />
                </a>
            </Tooltip>
        </div>

        <div className='img-3'>
            <div className='caption'>
                <span className='border'>{t3}</span>
            </div>
        </div>

        <div className='section'>
            <h3 className='border'>{t3}</h3>
            <p className='descripcion'>Juego puzzle de dados en Unity 3D basado en álgebra lineal.</p>
            <Tooltip title='Repositorio'>
                <a href="https://github.com/CVG42/Rolling_Dice" target='_blank'>
                    <img className='capy-repo' src="../githublogo.png" alt="github" />
                </a>
            </Tooltip>
        </div>

        <div className='img-4'>
            <div className='caption'>
                <span className='border'>{t4}</span>
            </div>
        </div>

        <div className='section'>
            <h3 className='border'>{t4}</h3>
            <p className='descripcion'>Juego de mesa roll 'n write el cual su campaña de Kickstarter comenzará próximamente.</p>
            <Tooltip title='Facebook'>
                <a href="https://www.facebook.com/TabletopWorkshops/" target='_blank'>
                    <img className='capy-repo' src="../fblogo.png" alt="facebook" />
                </a>
            </Tooltip>
        </div>

        <div className='img-5'>
            <div className='caption'>
                <span className='border'>{t5}</span>
            </div>
        </div>

        <div className='section'>
            <h3 className='border'>{t5}</h3>
            <p className='descripcion'>Farming simulator y RPG en desarrollo.</p>
            <Tooltip title='Repositorio'>
                <a href="https://github.com/CVG42/TokiNoAto_Prototype" target='_blank'>
                    <img className='capy-repo' src="../githublogo.png" alt="github" />
                </a>
            </Tooltip>
        </div>

        <div className='img-6'></div>
    </div>
  )
}

Parallax.propTypes = {
    titulo: PropTypes.string.isRequired,
    t1: PropTypes.string.isRequired,
    t2: PropTypes.string.isRequired,
    t3: PropTypes.string.isRequired,
    t4: PropTypes.string.isRequired,
    t5: PropTypes.string.isRequired,
}
