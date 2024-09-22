const quizData = [
    {
        "question": "1.What is the main benefit of virtualization in cloud computing?",
        "options": ["Increases hardware cost", "Reduces infrastructure cost", "Slows down deployment", "Complicates administration"],
        "correct": 1
    },
    {
        "question": "2.Which of the following is NOT a type of hardware virtualization?",
        "options": ["Full virtualization", "Para virtualization", "Semi virtualization", "Partial virtualization"],
        "correct": 2
    },
    {
        "question": "3.A hypervisor that runs directly on the physical hardware is called:",
        "options": ["Type 1 Hypervisor", "Type 2 Hypervisor", "Full Hypervisor", "Para Hypervisor"],
        "correct": 0
    },
    {
        "question": "4.Which type of virtualization involves virtualizing the complete hardware and software stack?",
        "options": ["Full virtualization", "Partial virtualization", "Para virtualization", "Desktop virtualization"],
        "correct": 0
    },
    {
        "question": "5.What is a limitation of virtualization?",
        "options": ["Increased hardware utilization", "Dependency on a single point of failure", "Fast deployment", "Reduced operational cost"],
        "correct": 1
    },
    {
        "question": "6.Which of the following hypervisors is a Type 2 hypervisor?",
        "options": ["VMware ESXi", "Microsoft Hyper-V", "Oracle VirtualBox", "Xen"],
        "correct": 2
    },
    {
        "question": "7.Which of the following is NOT a benefit of virtualization?",
        "options": ["Increased system flexibility", "Reduced administrative overhead", "Higher hardware cost", "Faster resource provisioning"],
        "correct": 2
    },
    {
        "question": "8.What type of virtualization allows multiple virtual machines to run on a single physical machine?",
        "options": ["Desktop virtualization", "Server virtualization", "Application virtualization", "Network virtualization"],
        "correct": 1
    },
    {
        "question": " 9.What is a virtual machine (VM)?",
        "options": ["A physical machine with extra hardware", "A software emulation of physical hardware", "A networking tool", "A type of storage server"],
        "correct": 1
    },
    {
        "question": "10.Which of the following is a type of server virtualization?",
        "options": ["Hardware-assisted virtualization", "Application virtualization", "Full desktop virtualization", "Virtual machine-based server consolidation"],
        "correct": 3
    },
    {
        "question": "11.Which of the following is a benefit of server virtualization?",
        "options": ["Reduced hardware costs", "Increased hardware footprint", "Longer deployment times", "Higher power consumption"],
        "correct": 0
    },
    {
        "question": "12.Desktop virtualization typically uses:",
        "options": ["Virtual desktops on a central server", "Dedicated hardware for each user", "Only application-level virtualization", "Physical servers for each desktop"],
        "correct": 0
    },
    {
        "question": "13.Which of the following is NOT a type of desktop virtualization?",
        "options": ["Virtual Desktop Infrastructure (VDI)", "Full virtualization", "Remote Desktop Services (RDS)", "Local desktop virtualization"],
        "correct": 1
    },
    {
        "question": "14.What is the primary use of virtual server consolidation?",
        "options": ["Increase the number of physical servers", "Reduce the number of physical servers", "Increase the power consumption", "Separate server and network operations"],
        "correct": 1
    },
    {
        "question": "15.Which type of server virtualization splits a single server into multiple isolated virtual environments?",
        "options": ["Full virtualization", "Container-based virtualization", "Partial virtualization", "Para virtualization"],
        "correct": 1
    },
    {
        "question": "16.Which of the following is a key benefit of desktop virtualization for businesses?",
        "options": ["Increased desktop maintenance", "Centralized management of desktops", "Higher desktop hardware costs", "Physical access to desktop hardware"],
        "correct": 1
    },
    {
        "question": "17.What is the primary benefit of using a virtual machine for server consolidation?",
        "options": ["Increased hardware purchases", "Better utilization of server resources", "Higher power consumption", "Physical machine dependence"],
        "correct": 1
    },
    {
        "question": "18.What does network virtualization achieve?",
        "options": ["Physical segmentation of networks", "Software-defined segmentation of network resources", "Creating new physical networks", "Eliminating all hardware from the network"],
        "correct": 1
    },
    {
        "question": "19.What is VLAN used for in network virtualization?",
        "options": ["Virtualizing storage devices", "Isolating network segments", "Adding new hardware to the network", "Managing desktop computers"],
        "correct": 1
    },
    {
        "question": "20.Which of the following is a tool used for network virtualization?",
        "options": ["VirtualBox", "VMware NSX", "Docker", "Hyper-V"],
        "correct": 1
    },
    {
        "question": "21.What is a key function of WAN virtualization?",
        "options": ["Virtualizing storage networks", "Consolidating server hardware", "Virtualizing wide area networks", "Physical segmentation of LAN"],
        "correct": 2
    },
    {
        "question": "22.Which of the following is an advantage of network virtualization?",
        "options": ["Easier management of physical switches", "Simplified network management and resource allocation", "Increased need for physical hardware", "Limited scalability"],
        "correct": 1
    },
    {
        "question": "23.In network virtualization, VLAN stands for:",
        "options": ["Virtual LAN", "Virtual Logic Area Network", "Virtual Layer Access Node", "Virtual Local Administrative Network"],
        "correct": 0
    },
    {
        "question": "24.Which technology is used to manage network virtualization dynamically?",
        "options": ["SAN", "SDN", "VPN", "VDI"],
        "correct": 1
    },
    {
        "question": "25.How does WAN virtualization differ from traditional WAN?",
        "options": ["It uses physical switches for segmentation", "It centralizes control and management of WAN resources", "It increases hardware deployment", "It requires less bandwidth"],
        "correct": 1
    },
    
    {
        "question": "26.What is cloud computing?",
        "options": ["The use of local servers for data storage", "The delivery of computing services over the internet", "The process of manually managing servers", "The use of physical data centers exclusively"],
        "correct": 1
    },
    {
        "question": "27.Which of the following is a key characteristic of cloud computing?",
        "options": ["Fixed resource allocation", "On-demand self-service", "Limited scalability", "High upfront cost"],
        "correct": 1
    },
    {
        "question": "28.Which of the following is a primary deployment model of cloud computing?",
        "options": ["Community cloud", "Open cloud", "Virtual cloud", "Full cloud"],
        "correct": 0
    },
    {
        "question": "29.Which cloud computing service model provides infrastructure like virtual machines, storage, and networks?",
        "options": ["Software as a Service (SaaS)", "Platform as a Service (PaaS)", "Infrastructure as a Service (IaaS)", "Data as a Service (DaaS)"],
        "correct": 2
    },
    {
        "question": "30.What is the main advantage of using cloud computing?",
        "options": ["High initial investment", "Scalability and flexibility", "Complete control over physical hardware", "Limited data access"],
        "correct": 1
    },
    {
        "question": "31.Which cloud computing model delivers applications over the internet?",
        "options": ["IaaS", "PaaS", "SaaS", "DaaS"],
        "correct": 2
    },
    {
        "question": "32.Which of the following is an example of a SaaS (Software as a Service) provider?",
        "options": ["Microsoft Azure", "Google Workspace", "Amazon EC2", "Kubernetes"],
        "correct": 1
    },
    {
        "question": "33.Which cloud computing model is designed for software development and testing environments?",
        "options": ["IaaS", "PaaS", "SaaS", "DaaS"],
        "correct": 1
    },
    {
        "question": "34.Which of the following cloud models is accessible by the general public and owned by a cloud services provider?",
        "options": ["Private cloud", "Public cloud", "Hybrid cloud", "Community cloud"],
        "correct": 1
    },
    {
        "question": "35.What does 'scalability' in cloud computing refer to?",
        "options": ["Increasing server size", "The ability to handle growing workloads by adding resources", "Reducing the number of users on the cloud", "Cloud computing for small businesses only"],
        "correct": 1
    }


];


let currentQuestion = 0;
let userAnswer = null;

const quizContainer = document.getElementById('quiz');

function loadQuestion() {
    quizContainer.innerHTML = `
        <h2>${quizData[currentQuestion].question}</h2>
        ${quizData[currentQuestion].options.map((option, index) => `
            <button onclick="selectAnswer(${index})">${option}</button>
        `).join('')}
        <p id="feedback"></p>
    `;
}

function selectAnswer(index) {
    userAnswer = index;
    const feedback = document.getElementById('feedback');
    if (index === quizData[currentQuestion].correct) {
        feedback.innerHTML = "Correct!";
        feedback.classList.add("correct");
        feedback.classList.remove("incorrect");
    } else {
        feedback.innerHTML = `Incorrect! The correct answer is: ${quizData[currentQuestion].options[quizData[currentQuestion].correct]}`;
        feedback.classList.add("incorrect");
        feedback.classList.remove("correct");
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Load the first question
loadQuestion();
