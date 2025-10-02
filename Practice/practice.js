document.addEventListener('DOMContentLoaded', () => {
    // Data from the provided image
    const groupData = {
        groupA: [
            { pos: 1, player: "Alex Rodriguez", P: 5, W: 4, D: 1, L: 0, GF: 12, GA: 3, GD: 9, Pts: 13 },
            { pos: 2, player: "Marcus Johnson", P: 5, W: 3, D: 1, L: 1, GF: 8, GA: 5, GD: 3, Pts: 10 },
            { pos: 3, player: "Diego Santos", P: 5, W: 2, D: 2, L: 1, GF: 7, GA: 6, GD: 1, Pts: 8 },
            { pos: 4, player: "James Wilson", P: 5, W: 2, D: 0, L: 3, GF: 6, GA: 8, GD: -2, Pts: 6 },
            { pos: 5, player: "Ryan Thompson", P: 5, W: 1, D: 1, L: 3, GF: 4, GA: 9, GD: -5, Pts: 4 },
            { pos: 6, player: "Kevin Brown", P: 5, W: 0, D: 1, L: 4, GF: 2, GA: 8, GD: -6, Pts: 1 },
        ],
        groupB: [
            { pos: 1, player: "Carlos Mendez", P: 5, W: 4, D: 0, L: 1, GF: 11, GA: 4, GD: 7, Pts: 12 },
            { pos: 2, player: "Michael Chen", P: 5, W: 3, D: 2, L: 0, GF: 9, GA: 4, GD: 5, Pts: 11 },
            { pos: 3, player: "Antonio Silva", P: 5, W: 2, D: 1, L: 2, GF: 6, GA: 7, GD: -1, Pts: 7 },
            { pos: 4, player: "David Kim", P: 5, W: 2, D: 0, L: 3, GF: 5, GA: 8, GD: -3, Pts: 6 },
            { pos: 5, player: "Lucas Garcia", P: 5, W: 1, D: 2, L: 2, GF: 4, GA: 6, GD: -2, Pts: 5 },
            { pos: 6, player: "Tyler Davis", P: 5, W: 0, D: 1, L: 4, GF: 3, GA: 9, GD: -6, Pts: 1 },
        ],
        groupC: [
            { pos: 1, player: "Sebastian Lopez", P: 5, W: 5, D: 0, L: 0, GF: 14, GA: 2, GD: 12, Pts: 15 },
            { pos: 2, player: "Noah Anderson", P: 5, W: 3, D: 1, L: 1, GF: 10, GA: 6, GD: 4, Pts: 10 },
            { pos: 3, player: "Ethan Martinez", P: 5, W: 2, D: 2, L: 1, GF: 8, GA: 7, GD: 1, Pts: 8 },
            { pos: 4, player: "Oliver White", P: 5, W: 1, D: 2, L: 2, GF: 5, GA: 8, GD: -3, Pts: 5 },
            { pos: 5, player: "Liam Taylor", P: 5, W: 1, D: 1, L: 3, GF: 4, GA: 10, GD: -6, Pts: 4 },
            { pos: 6, player: "Mason Clark", P: 5, W: 0, D: 0, L: 5, GF: 1, GA: 9, GD: -8, Pts: 0 },
        ],
        groupD: [
            { pos: 1, player: "Gabriel Torres", P: 5, W: 4, D: 1, L: 0, GF: 13, GA: 4, GD: 9, Pts: 13 },
            { pos: 2, player: "Aiden Murphy", P: 5, W: 3, D: 0, L: 2, GF: 8, GA: 7, GD: 1, Pts: 9 },
            { pos: 3, player: "Jackson Lee", P: 5, W: 2, D: 2, L: 1, GF: 7, GA: 6, GD: 1, Pts: 8 },
            { pos: 4, player: "Connor Hall", P: 5, W: 2, D: 1, L: 2, GF: 6, GA: 8, GD: -2, Pts: 7 },
            { pos: 5, player: "Hunter Scott", P: 5, W: 1, D: 0, L: 4, GF: 5, GA: 11, GD: -6, Pts: 3 },
            { pos: 6, player: "Blake Adams", P: 5, W: 0, D: 2, L: 3, GF: 3, GA: 6, GD: -3, Pts: 2 },
        ],
    };

    /**
     * Creates a table row (<tr>) for a player and appends it to the table body.
     * @param {Object} player - The player data object.
     * @param {HTMLElement} tbody - The <tbody> element to append the row to.
     */
    function createTableRow(player, tbody) {
        const row = document.createElement('tr');
        // Add rank class for row background highlighting (5th and 6th)
        row.classList.add(`rank-${player.pos}`);

        const cols = [
            `<span class="pos-circle">${player.pos}</span>`,
            player.player,
            player.P,
            player.W,
            player.D,
            player.L,
            player.GF,
            player.GA,
            getGdCell(player.GD),
            player.Pts
        ];

        cols.forEach(content => {
            const td = document.createElement('td');
            td.innerHTML = content;
            row.appendChild(td);
        });

        tbody.appendChild(row);
    }

    /**
     * Formats the Goal Difference (GD) cell with color classes.
     * @param {number} gd - The Goal Difference value.
     * @returns {string} - The HTML content for the GD cell.
     */
    function getGdCell(gd) {
        let gdClass = '';
        let gdSign = '';

        if (gd > 0) {
            gdClass = 'gd-positive';
            gdSign = '+'; // Add a plus sign for positive GD
        } else if (gd < 0) {
            gdClass = 'gd-negative';
        }

        return `<span class="${gdClass}">${gdSign}${gd}</span>`;
    }

    /**
     * Renders all group tables.
     */
    function renderTables() {
        for (const group in groupData) {
            const tableId = group.replace('group', 'group').toUpperCase(); // e.g., 'groupA' -> 'GROUPA'
            const tbody = document.querySelector(`#${group} tbody`);

            if (tbody) {
                // Clear existing rows (if any)
                tbody.innerHTML = '';
                
                // Populate the table with data
                groupData[group].forEach(player => {
                    createTableRow(player, tbody);
                });
            }
        }
    }

    // Initial render
    renderTables();
});