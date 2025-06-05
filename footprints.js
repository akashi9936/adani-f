// Our Footprints Interactive Section JS
const footprintsData = {
  states: [
    { value: 'andhra_pradesh', label: 'Andhra Pradesh' },
    { value: 'arunachal_pradesh', label: 'Arunachal Pradesh' },
    { value: 'assam', label: 'Assam' },
    { value: 'bihar', label: 'Bihar' },
    { value: 'chhattisgarh', label: 'Chhattisgarh' },
    { value: 'goa', label: 'Goa' },
    { value: 'gujarat', label: 'Gujarat' },
    { value: 'haryana', label: 'Haryana' },
    { value: 'himachal_pradesh', label: 'Himachal Pradesh' },
    { value: 'jharkhand', label: 'Jharkhand' },
    { value: 'karnataka', label: 'Karnataka' },
    { value: 'kerala', label: 'Kerala' },
    { value: 'madhya_pradesh', label: 'Madhya Pradesh' },
    { value: 'maharashtra', label: 'Maharashtra' },
    { value: 'manipur', label: 'Manipur' },
    { value: 'meghalaya', label: 'Meghalaya' },
    { value: 'mizoram', label: 'Mizoram' },
    { value: 'nagaland', label: 'Nagaland' },
    { value: 'odisha', label: 'Odisha' },
    { value: 'punjab', label: 'Punjab' },
    { value: 'rajasthan', label: 'Rajasthan' },
    { value: 'sikkim', label: 'Sikkim' },
    { value: 'tamil_nadu', label: 'Tamil Nadu' },
    { value: 'telangana', label: 'Telangana' },
    { value: 'tripura', label: 'Tripura' },
    { value: 'uttar_pradesh', label: 'Uttar Pradesh' },
    { value: 'uttarakhand', label: 'Uttarakhand' },
    { value: 'west_bengal', label: 'West Bengal' }
  ],
  sections: [
    {
      key: 'education',
      title: 'Education & Growth',
      info: {
        gujarat: '32 Adani Schools & 4 Adani Vidya Mandir Schools catering to 33,297 students',
        maharashtra: '12 Adani Schools & 2 Adani Vidya Mandir Schools catering to 12,000 students',
        rajasthan: '8 Adani Schools & 1 Adani Vidya Mandir School catering to 7,500 students',
        default: 'Data coming soon'
      }
    },
    {
      key: 'livelihoods',
      title: 'Sustainable Livelihoods',
      info: {
        gujarat: 'Number of Self-Help Groups (SHGs) we work with - 767',
        maharashtra: 'Number of SHGs we work with - 320',
        rajasthan: 'Number of SHGs we work with - 210',
        default: 'Data coming soon'
      }
    },
    {
      key: 'community',
      title: 'Community Development',
      info: {
        gujarat: '140 Units of Roof Rainwater Harvesting System Installed',
        maharashtra: '60 Units of Roof Rainwater Harvesting System Installed',
        rajasthan: '35 Units of Roof Rainwater Harvesting System Installed',
        default: 'Data coming soon'
      }
    },
    {
      key: 'climate',
      title: 'Climate Action',
      info: {
        gujarat: '9,07,531 m3 additional water storage capacity created, benefitting 72,400 people',
        maharashtra: '3,00,000 m3 additional water storage capacity created, benefitting 25,000 people',
        rajasthan: '1,50,000 m3 additional water storage capacity created, benefitting 12,000 people',
        default: 'Data coming soon'
      }
    },
    {
      key: 'health',
      title: 'Health & Nutrition',
      info: {
        gujarat: 'Working with 500+ SuPoshan Sanginis across 1,164 villages',
        maharashtra: 'Working with 200+ SuPoshan Sanginis across 500 villages',
        rajasthan: 'Working with 120+ SuPoshan Sanginis across 300 villages',
        default: 'Data coming soon'
      }
    }
  ]
};

// Updated image mapping: state -> section -> image
const footprintsImages = {
  gujarat: {
    education: 'assets/images/classroom2.png',
    livelihoods: 'assets/images/rural-tech1.png',
    community: 'assets/images/charity3.png',
    climate: 'assets/images/rural-tech.png',
    health: 'assets/images/independent-woman-grok.jpg'
  },
  maharashtra: {
    education: 'assets/images/teacherbanner.jpg',
    livelihoods: 'assets/images/rural-tech-grok2.jpg',
    community: 'assets/images/charity4.png',
    climate: 'assets/images/rural-tech1.png',
    health: 'assets/images/classroom2.png'
  },
  rajasthan: {
    education: 'assets/images/herobanner.jpg',
    livelihoods: 'assets/images/rural-tech-grok3.jpg',
    community: 'assets/images/independent-woman-grok.jpg',
    climate: 'assets/images/charity3.png',
    health: 'assets/images/rural-tech.png'
  },
  andhra_pradesh: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  arunachal_pradesh: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  assam: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  bihar: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  chhattisgarh: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  goa: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  haryana: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  himachal_pradesh: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  jharkhand: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  karnataka: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  kerala: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  madhya_pradesh: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  manipur: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  meghalaya: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  mizoram: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  nagaland: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  odisha: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  punjab: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  sikkim: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  tamil_nadu: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  telangana: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  tripura: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  uttar_pradesh: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  uttarakhand: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  west_bengal: {
    education: '',
    livelihoods: '',
    community: '',
    climate: '',
    health: ''
  },
  // Default fallback image
  default: 'assets/images/rural-tech1.png'
};

function renderFootprintsDropdownAndSections() {
  const stateSelect = document.getElementById('stateSelect');
  const tabContainer = document.getElementById('footprintsTab');

  // Populate dropdown
  stateSelect.innerHTML = '';
  footprintsData.states.forEach(st => {
    const opt = document.createElement('option');
    opt.value = st.value;
    opt.textContent = st.label;
    stateSelect.appendChild(opt);
  });

  // Render section cards - REMOVED automatic active class
  tabContainer.innerHTML = '';
  footprintsData.sections.forEach((section) => {
    const card = document.createElement('div');
    card.className = 'footprints-section-card'; // No active class by default
    card.setAttribute('data-section', section.key);
    
    // Title
    const title = document.createElement('div');
    title.className = 'footprints-section-title';
    title.textContent = section.title;
    card.appendChild(title);
    
    // Info for each state (now for all 28 states)
    footprintsData.states.forEach(st => {
      const text = section.info[st.value] || section.info.default;
      const info = document.createElement('div');
      info.className = 'footprints-section-info';
      info.setAttribute('data-state', st.value);
      info.textContent = text;
      if (st.value !== footprintsData.states[0].value) info.style.display = 'none';
      card.appendChild(info);
    });
    
    tabContainer.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  renderFootprintsDropdownAndSections();

  const stateSelect = document.getElementById('stateSelect');
  const tabContainer = document.getElementById('footprintsTab');
  const sectionCards = () => tabContainer.querySelectorAll('.footprints-section-card');
  const photoImg = document.getElementById('footprintsPhoto');

  function updateInfoText() {
    const selectedState = stateSelect.value;
    
    sectionCards().forEach(card => {
      card.querySelectorAll('.footprints-section-info').forEach(info => {
        if (info.getAttribute('data-state') === selectedState) {
          info.style.display = '';
        } else {
          info.style.display = 'none';
        }
      });
    });
    
    // Update image based on active tab and selected state
    updateImage();
  }

  function updateImage() {
    const selectedState = stateSelect.value;
    const activeCard = document.querySelector('.footprints-section-card.active');
    
    if (activeCard) {
      const activeSection = activeCard.getAttribute('data-section');
      
      // Get image for the specific state and section combination
      if (footprintsImages[selectedState] && footprintsImages[selectedState][activeSection]) {
        photoImg.src = footprintsImages[selectedState][activeSection];
        photoImg.alt = `${selectedState} - ${activeSection} footprints`;
      } else {
        // Fallback to default image
        photoImg.src = footprintsImages.default;
        photoImg.alt = 'Default footprints';
      }
    } else {
      // No active tab, show default image
      photoImg.src = footprintsImages.default;
      photoImg.alt = 'Default footprints';
    }
  }

  // Card click: set active and update image
  tabContainer.addEventListener('click', function(e) {
    const card = e.target.closest('.footprints-section-card');
    if (card) {
      sectionCards().forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      // Update image immediately after setting active state
      updateImage();
    }
  });

  stateSelect.addEventListener('change', updateInfoText);
  updateInfoText();
});
