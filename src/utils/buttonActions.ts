
export const buttonActions = {
  speakToExpert: () => {
    // Open a contact form or phone number
    window.open('tel:1800-SOLAR-AU', '_self');
  },

  getFreeAssessment: () => {
    // Scroll to a contact form or open a modal
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Fallback to external assessment form
      window.open('https://www.solar.com/solar-calculator/', '_blank');
    }
  },

  compareNow: () => {
    // Scroll to comparison section or open comparison tool
    window.open('https://www.solarchoice.net.au/', '_blank');
  },

  findMyRebates: () => {
    // Scroll to programs table
    const element = document.getElementById('programs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  },

  compareInstallers: () => {
    // Open installer comparison service
    window.open('https://www.solarchoice.net.au/installer-network/', '_blank');
  },

  learnMoreAboutState: (state: string) => {
    // Scroll to state-specific rebates section
    const element = document.getElementById('state-rebates');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // Then activate the specific state tab
      setTimeout(() => {
        const stateTab = document.querySelector(`[value="${state.toLowerCase()}"]`) as HTMLElement;
        if (stateTab) {
          stateTab.click();
        }
      }, 500);
    }
  },

  getStateRebates: (state: string) => {
    // Open state-specific rebate information
    const stateUrls: { [key: string]: string } = {
      'NSW': 'https://www.energy.nsw.gov.au/renewables',
      'VIC': 'https://www.solar.vic.gov.au/',
      'QLD': 'https://www.qld.gov.au/environment/climate/renewable-energy',
      'SA': 'https://www.sa.gov.au/topics/water-energy-and-environment/energy/solar-and-batteries',
      'WA': 'https://www.wa.gov.au/organisation/department-of-mines-industry-regulation-and-safety/distributed-energy-buyback-scheme',
      'ACT': 'https://www.environment.act.gov.au/energy/sustainable-household-scheme',
      'NT': 'https://territorygeneration.com.au/solar-rebates/'
    };
    
    const url = stateUrls[state];
    if (url) {
      window.open(url, '_blank');
    }
  },

  getFreeQuotes: () => {
    // Open quote comparison service
    window.open('https://www.solarchoice.net.au/get-solar-quotes/', '_blank');
  }
};
