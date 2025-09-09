window.addEventListener('DOMContentLoaded', function () {
    // === PAGE 3: Create Poll ===
    const optionCountSelect = document.getElementById('option-count');
    const optionFieldsContainer = document.getElementById('option-fields');
    const cancelBtn = document.getElementById('cancel-btn');
    const createBtn = document.getElementById('create-btn');

    if (optionCountSelect && optionFieldsContainer) {
        function generateOptionFields(count) {
            optionFieldsContainer.innerHTML = '';
            for (let i = 1; i <= count; i++) {
                const label = document.createElement('label');
                label.textContent = `Vaihtoehto ${i}`;
                label.setAttribute('for', `option-${i}`);

                const input = document.createElement('input');
                input.type = 'text';
                input.id = `option-${i}`;
                input.name = `option-${i}`;
                input.placeholder = `Enter option ${i}`;
                input.required = true;
                input.minLength = 1;
                input.maxLength = 100;

                const div = document.createElement('div');
                div.classList.add('form-group');
                div.appendChild(label);
                div.appendChild(input);
                optionFieldsContainer.appendChild(div);
            }
        }

        generateOptionFields(parseInt(optionCountSelect.value));
        optionCountSelect.addEventListener('change', () => {
            generateOptionFields(parseInt(optionCountSelect.value));
        });

        cancelBtn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'User_page.html';
        });

        createBtn.addEventListener('click', (e) => { //Issue, claims new polls are already voted
            e.preventDefault();
            const titleInput = document.getElementById('poll-title');
            const descriptionInput = document.getElementById('poll-description');
            const optionCount = parseInt(optionCountSelect.value);
            const options = [];

            let isValid = true;

            titleInput.classList.remove('error');
            const title = titleInput.value.trim();
            if (title.length < 5 || title.length > 50) {
                titleInput.classList.add('error');
                isValid = false;
            }

            descriptionInput.classList.remove('error');
            const description = descriptionInput.value.trim();
            if (description.length < 10 || description.length > 250) {
                descriptionInput.classList.add('error');
                isValid = false;
            }

            for (let i = 1; i <= optionCount; i++) {
                const optionInput = document.getElementById(`option-${i}`);
                optionInput.classList.remove('error');
                const value = optionInput.value.trim();
                if (!value || value.length > 100) {
                    optionInput.classList.add('error');
                    isValid = false;
                } else {
                    options.push(value);
                }
            }

            if (!isValid || options.length < 2) {
                alert('Please correct the highlighted fields.');
                return;
            }

            const poll = { //Unique ID
                id: `poll_${Date.now()}`,
                title,
                description,
                options,
                createdAt: new Date().toISOString()
            };

            const existingPolls = JSON.parse(localStorage.getItem('polls')) || [];
            existingPolls.push(poll);
            localStorage.setItem('polls', JSON.stringify(existingPolls));
            window.location.href = 'User_page.html';
        });
    }

    // === PAGE 2: Render Polls and Handle Voting ===
    const pollsContainer = document.getElementById('polls-container');
    const template = document.querySelector('.vote-box.template');

    if (pollsContainer && template) {
        const storedPolls = JSON.parse(localStorage.getItem('polls')) || [];
        const MAX_POLLS = 12;
        const staticPollsCount = 3;
        const totalPolls = storedPolls.length + staticPollsCount;

        if (totalPolls > MAX_POLLS) {
            alert('Maximum of 12 polls allowed. Some polls will not be shown.');
            storedPolls.length = MAX_POLLS - staticPollsCount;
        }

        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        const userType = currentUser?.role || 'guest';
        const votes = JSON.parse(localStorage.getItem("votes") || "{}");
        const userVotes = votes[currentUser?.id] || {};

        storedPolls.forEach((poll, index) => {
            //
            const clone = template.cloneNode(true);
            clone.style.display = 'block';
            clone.classList.remove('template');

            clone.querySelector('.polls-new-title').textContent = poll.title;
            clone.querySelector('.polls-new-description').textContent = poll.description;

            const optionContainer = clone.querySelector('.option-container');
            optionContainer.innerHTML = '';
            
            poll.options.forEach((optionText, optionIndex) => {
                const optionId = `poll${index}-option${optionIndex}`;
                const optionRow = document.createElement('div');
                optionRow.classList.add('option-row');

                if (userType !== 'admin'){
                    
                    const input = document.createElement('input');
                    input.type = 'radio';
                    input.name = `poll${index}`;
                    input.id = optionId;
                    input.value = optionText;
                    optionRow.appendChild(input);
                }

                const optionDiv = document.createElement('div');
                optionDiv.classList.add('option');
                optionDiv.textContent = optionText;

                optionRow.appendChild(optionDiv);
                optionContainer.appendChild(optionRow);
            });

            const voteButton = clone.querySelector('.vote-button');
            voteButton.textContent = 'Äänestä';

            const alreadyVoted = userVotes[poll.id]; //Change this

            if (alreadyVoted) {
                const inputs = clone.querySelectorAll('input[type="radio"]');
                inputs.forEach(input => {
                    input.disabled = true;
                    if (input.value === alreadyVoted) {
                        input.checked = true;
                    }
                });
                voteButton.disabled = true;
                voteButton.textContent = "Äänestit jo";
            } else {
                voteButton.addEventListener('click', () => { //
                    const selectedOption = clone.querySelector(`input[name="poll${index}"]:checked`);
                    if (!selectedOption) {
                        alert("Valitse vaihtoehto ennen äänestämistä");
                        return;
                    }

                    const selectedValue = selectedOption.value;

                    if (!votes[currentUser.id]) {
                        votes[currentUser.id] = {};
                    }

                    votes[currentUser.id][poll.id] = selectedValue;
                    localStorage.setItem("votes", JSON.stringify(votes));

                    const inputs = clone.querySelectorAll('input[type="radio"]');
                    inputs.forEach(input => input.disabled = true);
                    voteButton.disabled = true;
                    voteButton.textContent = "Äänestit";
                });
            }

            // Hide vote button for admins
            if (userType === 'admin' && voteButton) {
                voteButton.style.display = 'none';
            }

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = '❌';
            deleteBtn.classList.add('delete-button');
            deleteBtn.title = 'Poista äänestys';
            Object.assign(deleteBtn.style, {
                position: 'absolute',
                top: '8px',
                right: '8px',
                background: 'transparent',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer'
            });

            clone.classList.add('vote-box');
            clone.style.position = 'relative';
            clone.appendChild(deleteBtn);

            deleteBtn.addEventListener('click', () => {
                if (confirm("Oletko varma että haluat poistaa äänestyksen?")) {
                    const existingPolls = JSON.parse(localStorage.getItem('polls')) || [];
                    existingPolls.splice(index, 1);
                    localStorage.setItem('polls', JSON.stringify(existingPolls));
                    clone.remove();
                }
            });
            
            //
            if (userType === 'admin' || alreadyVoted) { //HERE
                const detailsButton = document.createElement('button');
                detailsButton.textContent = 'Poll Details';
                detailsButton.classList.add('details-button');
                
                Object.assign(detailsButton.style, {
                    position: 'absolute',
                    bottom: '8px',
                    left: '8px',
                    backgroundColor: '#e0e0e0',
                    border: '1px solid #ccc',
                    padding: '5px 10px',
                    fontSize: '12px',
                    cursor: 'pointer'
                });
                
                clone.appendChild(detailsButton);
                let showingDetails = false;
                detailsButton.addEventListener('click', () => {
                    showingDetails = !showingDetails;
                    const allVotes = JSON.parse(localStorage.getItem("votes") || "{}");
                    const voteCounts = {};

                    // Tally all votes for this poll
                    for (const userId in allVotes) {
                        const userVote = allVotes[userId]?.[poll.id]; //
                        if (userVote) {
                            voteCounts[userVote] = (voteCounts[userVote] || 0) + 1;
                        }
                    }

                    // Loop through each option-row to update text
                    const optionRows = clone.querySelectorAll('.option-row');
                    optionRows.forEach(row => {
                    const optionTextDiv = row.querySelector('.option');
                    const fullOriginal = optionTextDiv.getAttribute('data-original');
                    
                    if (showingDetails) {
                        // Save original text on first toggle
                        if (!fullOriginal) {
                            optionTextDiv.setAttribute('data-original', optionTextDiv.textContent);
                        }

                        const originalText = optionTextDiv.getAttribute('data-original') || optionTextDiv.textContent;

                        if (!optionTextDiv.hasAttribute('data-original')) {
                            optionTextDiv.setAttribute('data-original', originalText);
                        }

                        if (showingDetails){
                            const voteCount = voteCounts[originalText] || 0;
                            optionTextDiv.textContent = `${originalText} / ${voteCount}`;
                            detailsButton.textContent = 'Hide Poll Details';
                        } else {
                            optionTextDiv.textContent = optionTextDiv.getAttribute('data-original');
                            detailsButton.textContent = 'Poll Details';
                        }
                        
                        
                        const voteCount = voteCounts[originalText] || 0;
                        optionTextDiv.textContent = `${originalText} / ${voteCount}`;
                        detailsButton.textContent = 'Hide Poll Details';
                    
                    } else {
                        const originalText = optionTextDiv.getAttribute('data-original');
                        if (originalText) {
                            optionTextDiv.textContent = originalText;
                        }
                        detailsButton.textContent = 'Poll details';
                    }
                });
            });
        }


            pollsContainer.appendChild(clone);
        });
    }

    // === Delete Mode Toggle ===
    const removePollBtn = document.getElementById('removePollBtn');
    let deleteMode = false;

    if (removePollBtn) {
        removePollBtn.addEventListener('click', () => {
            deleteMode = !deleteMode;
            const deleteButtons = document.querySelectorAll('.delete-button');
            deleteButtons.forEach(button => {
                button.style.display = deleteMode ? 'block' : 'none';
            });
            removePollBtn.textContent = deleteMode ? 'Peruuta Poistaminen' : 'Poista äänestys';
        });
    }
});

  //window.onload = localStorage.removeItem("votes");
  //window.onload = localStorage.clear();
  //window.onload is reduntant if using this ---> window.addEventListener('DOMContentLoaded', function () {