console.log("Tasteful Tooltips | Configuring tooltips");
Hooks.on('ready',() => {
    const conditions = [
        {
            name: 'Blinded',
            pattern: /[Bb]linded/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A blinded creature can't see and automatically fails any ability checks that requires sight.</p>
                    </li>
                    <li>
                        <p>Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Charmed',
            pattern: /[Cc]harmed/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A charmed creature can't attack the charmer or target the charmer with harmful abilities or magical effects.</p>
                    </li>
                    <li>
                        <p>The charmer has advantage on any ability check to interact socially with the creature.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Deafened',
            pattern: /[Dd]eafened/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A deafened creature can't hear and automatically fails any ability check that requires hearing.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Exhaustion',
            pattern: /[Ee]xhaustion/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>For each level of exhaustion you accumulate you receive a -1 penalty to all d20 checks.</p>
                    </li>
                    <li>
                        <p>You die if your exhaustion level exceeds 10.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Frightened',
            pattern: /[Ff]rightened/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight.</p>
                    </li>
                    <li>
                        <p>The creature can't willingly move closer to the source of its fear.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Grappled',
            pattern: /[Gg]rappled/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A grappled creature's speed becomes 0, and it can't benefit from any bonus to its speed.</p>
                    </li>
                    <li>
                        <p>The condition ends if the grappler is incapacitated.</p>
                    </li>
                    <li>
                        <p>The condition also ends if an effect removes the grappled creature from the reach of the grappler or grappling effect, such as when a creature is hurled away by the thunderwave spell.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Incapacitated',
            pattern: /[Ii]ncapacitated/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>An incapacitated creature can't take actions or reactions.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Invisible',
            pattern: /[Ii]nvisible/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. The creature's location can be detected by any noise it makes or any tracks it leaves.</p>
                    </li>
                    <li>
                        <p>Attack rolls against the creature have disadvantage, and the creature's attack rolls have advantage.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Paralyzed',
            pattern: /[Pp]aralyzed/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A paralyzed creature is incapacitated and can't move or speak.</p>
                    </li>
                    <li>
                        <p>The creature automatically fails Strength and Dexterity saving throws.</p>
                    </li>
                    <li>
                        <p>Attack rolls against the creature have advantage.</p>
                    </li>
                    <li>
                        <p>Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Petrified',
            pattern: /[Pp]etrified/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). Its weight increases by a factor of ten, and it ceases aging.</p>
                    </li>
                    <li>
                        <p>The creature is incapacitated, can't move or speak, and is unaware of its surroundings.</p>
                    </li>
                    <li>
                        <p>Attack rolls against the creature have advantage.</p>
                    </li>
                    <li>
                        <p>The creature automatically fails Strength and Dexterity saving throws.</p>
                    </li>
                    <li>
                        <p>The creature has resistance to all damage.</p>
                    </li>
                    <li>
                        <p>The creature is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Poisoned',
            pattern: /[Pp]oisoned/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A poisoned creature has disadvantage on attack rolls and ability checks.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Prone',
            pattern: /[Pp]rone/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A prone creature's only movement option is to crawl, unless it stands up and thereby ends the condition.</p>
                    </li>
                    <li>
                        <p>The creature has disadvantage on attack rolls.</p>
                    </li>
                    <li>
                        <p>An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Restrained',
            pattern: /[Rr]estrained/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A restrained creature's speed becomes 0, and it can't benefit from any bonus to its speed.</p>
                    </li>
                    <li>
                        <p>Attack rolls against the creature have advantage, and the creature's attack rolls have disadvantage.</p>
                    </li>
                    <li>
                        <p>The creature has disadvantage on Dexterity saving throws.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Stunned',
            pattern: /[Ss]tunned/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>A stunned creature is incapacitated, can't move, and can speak only falteringly.</p>
                    </li>
                    <li>
                        <p>The creature automatically fails Strength and Dexterity saving throws.</p>
                    </li>
                    <li>
                        <p>Attack rolls against the creature have advantage.</p>
                    </li>
                </ul>`
        },
        {
            name: 'Unconscious',
            pattern: /[Uu]nconscious/gm,
            tooltip: 
                `<ul>
                    <li>
                        <p>An unconscious creature is incapacitated, can't move or speak, and is unaware of its surroundings.</p>
                    </li>
                    <li>
                        <p>The creature drops whatever it's holding and falls prone.</p>
                    </li>
                    <li>
                        <p>The creature automatically fails Strength and Dexterity saving throws.</p>
                    </li>
                    <li>
                        <p>Attack rolls against the creature have advantage.</p>
                    </li>
                    <li>
                        <p>Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.</p>
                    </li>
                </ul>`
        }
    ]
    conditions.forEach(condition => {
        CONFIG.TextEditor.enrichers.push({
            pattern: condition.pattern,
            enricher: async (match,options) => {
                const doc = document.createElement("span");
                doc.innerHTML = condition.name;
                doc.classList.add("tooltip-troll");
                doc.dataset.tooltip = condition.tooltip;
                return doc;
            }
        })
    })
})