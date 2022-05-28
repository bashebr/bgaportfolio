import config from '../../../config.json';
import ProfileImage from '../../assets/profile.jpg';

const details = async (args: string[]): Promise<string> => {
  if (config.ascii === 'Brhane') {
    return ` 
    <div style="display: block;, align-items: center;">
          <img style="margin-right: 2em"; src=${ProfileImage.src} width="180px">                                            
         Some details
        --------------------------------------------------
         ABOUT
         ${config.name}
        ﰩ ${config.ps1_hostname}
         <u><a style="color:#3399ff" href="${config.resume_url}" target="_blank">resume</a></u>
        爵 <u><a style="color:#3399ff" href="${config.repo}" target="_blank">Github repo</a></u>
        --------------------------------------------------
         CONTACT 
         <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
         <u><a style="color:#3399ff" href="https://github.com/${config.social.github}" target="_blank">github</a></u>
         <u><a style="color:#3399ff" href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin</a></u>       
    </div>
`;
  } else {
    return `
           ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▄                  details
        ▄▓▓▀ ▄▓▓▀▓▓▓▀▓▓▄ ▀▀▓▓▄              -----------
      ▓▓▀  ▄▓▀   ▐▓▓  ▀▓▓    ▓▓▄             ABOUT
    ▄▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓            ${config.name}
   ▓▓     ▓▓▓    ▐▓▓    ▐▓▓     ▓▓           <u><a href="${config.resume_url}" target="_blank">resume</a></u>
▐▓▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▓       爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
▐▓                                 ▐▓       -----------
▐▓        > L I V E T E R M        ▐▓        CONTACT 
▐▓                                 ▐▓        <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
▐▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓        <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
   ▓▓      ▐▓▓    ▓▓    ▐▓▓     ▓▓           <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
    ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓           -----------
      ▓▓▓   ▐▓▓   ▓▓   ▓▓▓   ▓▓▀             
        ▀▓▓▄▄ ▀▓▓▄▓▓▄▓▓▓▄▄▓▓▀               
            ▀▓▓▓▓▓▓▓▓▓▓▓▀▀             

`;
  }
};

export default details;
