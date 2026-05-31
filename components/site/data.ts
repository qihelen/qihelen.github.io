type EssayImage = {
  type: "image";
  src: string;
  alt: string;
  caption?: string;
  size?: "default" | "small" | "smaller" | "full";
};

type EssayImageGrid = {
  type: "imageGrid";
  images: Omit<EssayImage, "type">[];
};

type EssayEntry = {
  slug: string;
  title: string;
  category: string;
  body: Array<string | EssayImage | EssayImageGrid>;
  footnotes?: {
    label: string;
    text: string;
  }[];
  worksCited?: string[];
  links?: {
    text: string;
    href: string;
  }[];
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Music", href: "#music" },
  { label: "Art", href: "#art" },
  { label: "Photography", href: "#photography" },
  { label: "Contact", href: "#contact" },
];

export const interests = [
  "Antitrust",
  "Constitutional Law",
  "Corporate Personhood",
  "AI Governance",
  "Political Theory",
  "Aesthetics",
];

export const experiences = [
  {
    title: "Cornerstone Research",
    role: "Incoming Summer Analyst",
    detail:
      "Incoming analyst role focused on economic consulting, litigation support, and rigorous quantitative analysis.",
  },
  {
    title: "Superior Court of Delaware",
    role: "Judicial Intern",
    detail:
      "Conducted legal research and drafted preliminary bench opinions and orders for civil and criminal matters.",
  },
  {
    title: "270 Strategies",
    role: "Summer Associate",
    detail:
      "Led survey data analysis and client presentation work while researching and drafting clean energy proposals.",
  },
  {
    title: "United States House of Representatives",
    role: "Congressional Intern",
    detail:
      "Drafted constituent letters, assisted with casework, conducted legislative research, and helped organize community outreach events.",
  },
];

export const researchAreas = [
  {
    title: "Yale MacMillan Center",
    label: "Research Assistant",
    detail:
      "Used Stata and R to interpret data outputs, validate figures, and translate empirical results into editorial feedback.",
  },
  {
    title: "ANP Technologies",
    label: "Research and Development Intern",
    detail:
      "Supported COVID-19 rapid antigen test development and manufactured rapid tests and immunoassays in high-volume lab operations.",
  },
  {
    title: "Johns Hopkins Institute for NanoBioTechnology",
    label: "Research Assistant",
    detail:
      "Conducted research in the Honggang Cui Lab on hydrogelators for long-acting therapeutic release and revised PhD research presentations.",
  },
];

export const featuredProjects = [
  {
    category: "Portfolio",
    title: "Technical Projects and Writing",
    description: "Exploring Constitutional Interpretation, Artificial Intelligence, Philosophy, and Aesthetics Through Technical Projects and Original Scholarship.",
  },
];

export const projectSections = [
  {
    title: "Technical Projects",
    items: [
      {
        title: "Amicus",
        category: "Legal AI / Constitutional Analysis",
        description:
          "Amicus is an AI-assisted legal research and constitutional analysis platform designed to model judicial reasoning through originalist interpretive frameworks. The system combines retrieval-augmented generation (RAG), semantic search, and structured legal corpora to analyze Supreme Court opinions, historical sources, constitutional text, and precedent. It enables users to query legal doctrines, surface relevant authorities, and generate historically grounded constitutional analyses through a transparent and explainable research workflow.",
        links: [
          { label: "GitHub", href: "https://github.com/qihelen/Amicus" },
          { label: "Demo", href: "https://amicus-nine.vercel.app" },
        ],
      },
    ],
  },
  {
    title: "Writing & Essays",
    items: [
      {
        title: "AI Responsibility Gaps",
        category: "AI Ethics",
        description:
          "Explores whether artificial intelligence can undermine traditional concepts of moral responsibility and what accountability should look like in increasingly automated systems.",
        links: [
          {
            label: "Read Essay",
            href: "/projects/essays/ai-responsibility-and-responsibility-gaps",
          },
        ],
      },
      {
        title: "Defining Art: Aesthetic Judgment and an Asian American Artist",
        category: "Personal Essay",
        description:
          "Examines the relationship between beauty, artistic intention, and cultural meaning through philosophy, art criticism, and personal reflection.",
        links: [
          {
            label: "Read Essay",
            href: "/projects/essays/defining-art-aesthetic-judgment-and-an-asian-american-artist",
          },
        ],
      },
      {
        title: "The Failure of the 20th Century",
        category: "Cultural Critique",
        description:
          "A critique of twentieth-century musical modernism and its impact on audience engagement, artistic standards, and cultural taste.",
        links: [
          {
            label: "Read Essay",
            href: "/projects/essays/the-failure-of-the-20th-century",
          },
        ],
      },
      {
        title: "Logical Impossibility of Moral Dilemmas",
        category: "Philosophy",
        description:
          "Philosophical work on moral dilemmas, moral obligation, and whether genuine ethical conflicts are logically possible.",
        links: [
          {
            label: "Read Essay",
            href: "/projects/essays/logical-impossibility-of-moral-dilemmas",
          },
        ],
      },
    ],
  },
];

export const essays: EssayEntry[] = [
  {
    "slug": "ai-responsibility-and-responsibility-gaps",
    "title": "AI Responsibility Gaps",
    "category": "AI Ethics",
    "body": [
      "Matthias begins by explaining what it means to be responsible for an action. He subscribes to Strawson's belief that in order to be morally responsible for an action, the person must be \"rightly subject to a range of specific reactive attitudes like resentment, gratitude, censure, or praise\" (Matthias 175). Under this everyday understanding of moral responsibility, Matthias argues that a person must have control over their actions and the consequences, as well as knowledge of the relevant facts and the ability to reasonably predict outcomes. In this view, control functions as a necessary condition for moral responsibility (175). Matthias then illustrates the idea of control in practice. He contends that typically, a manufacturer will provide an operating manual to the person meant to operate the machine. The operating manual essentially transfers control, and thus responsibility, from the manufacturer to the operator. If the machine deviates outside the bounds of the specified operating manual, the manufacturer is morally responsible. If the machine functions properly but an outcome is not desirable, the operator is morally responsible for the outcome (175). Under this traditional model, control is transferred from the manufacturer to the operator, and responsibility is distributed directly between the two parties.",
      "However, with the development of autonomous learning, modern machines now have the ability to \"decide on a course of action and act without human intervention\" (177). These machines can modify their internal rules based on experience after deployment, resulting in a loss of predictability and control. Neural networks make it difficult for humans to fully understand the exact reasoning process behind a specific decision, since the system is trained on examples and learns by adjusting internal weighted connections, rather than following explicitly programmed rules (179). Matthias also introduces self-programming technologies, which allow machines to generate additional code and partially program themselves. Additionally, reinforcement learning requires machines to learn through \"trial-and-error,\" meaning that some mistakes are an unavoidable part of the learning process (179). As a result, it becomes more difficult for manufacturers to fully predict or track the system's outcomes. Because the manufacturer can no longer fully predict the actions taken by the machine, it appears that they are no longer morally responsible for the machine's behavior. Instead, it seems that the manufacturer is transferring control to the machine itself which results in a responsibility gap.",
      "However, in its current state, Matthias does not seem to think that autonomous machines can be held morally responsible for their actions. While AI systems may be technically autonomous within specific parameters and capable of reasoning in a computational or mathematical sense, this is fundamentally different from the way we ordinarily conceive of genuine moral autonomy. Moral autonomy is the kind of autonomy an agent must have in order to be properly morally responsible for an action. This involves the freedom to consciously deliberate on a course of action and act in accordance with those reasons.1 Current AI systems lack the capacity to genuinely deliberate, reflect, or will actions in the way human moral agents do. The way neural networks function helps illustrate this distinction. Neural networks are trained on large amounts of data and learn to recognize statistical patterns within the scope of their training.2 While these systems can imitate language, reasoning, and decision-making within those parameters, their performance often becomes unreliable when confronted with situations or data outside of their training domain.3 This suggests that AI systems are not reasoning or understanding in the same way humans do, but are instead generating outputs based on learned patterns and probabilistic prediction. The parameters are defining the limits under which the system can imitate reasoning, showing that these AI systems are unable to deliberate and act in accordance with their conscious deliberations. Although AI systems currently seem to effectively pass the Turing Test by convincingly simulating language and reasoning, this does not mean the machine itself is morally autonomous.4",
      "If AI is not morally autonomous, then it cannot absorb moral responsibility from humans. But that does not mean responsibility disappears once an AI system becomes involved in an action. Matthias seems to believe that the idea of diminished control creates responsibility gaps, but I contend that his account of moral responsibility requires a degree of control and predictability that is too demanding. I would argue that humans do not need to have full control over a situation to have control necessary for assigning moral responsibility. In our ordinary understanding of moral responsibility, one can be appropriately assigned blame for an action even if they did not have full control of the situation. Consider the development of a new cancer treatment. Scientists are unable to predict every possible side effect of a drug or how it will interact with every possible patient. Requiring this level of control and prediction would be unreasonable. Because of this, doctors often provide a statistical or probabilistic success rate of treatment. However, if the drug were to cause a fatal reaction in a patient, it would still seem intuitively correct to assign at least some moral responsibility to the researchers, or doctors involved in its development. In the United States legal system, individuals may still recover damages for harms caused by products even when the exact outcome was not perfectly foreseeable. This is also why insurance exists. The fact that society still assigns responsibility in contexts such as medical innovation or the operation of heavy machinery suggests that moral responsibility does not require complete predictability or perfect control over every consequence of an action. Responsibility can still be assigned even as control and predictability diminishes.",
      "Matthias may respond by saying that AI systems are inherently different from other developments in traditional medicine or technology because autonomous systems are capable of adapting and generating new responses after deployment based on their surrounding environment. In this sense, Matthias may argue that the diminished control involved in self-driving cars differs from the uncertainty a doctor faces when prescribing a drug with unintended side effects. While the doctor may not be able to predict every possible reaction to the medication, the drug does not behave independently or evolve in response to the environmental conditions. By contrast, autonomous vehicles may adapt in ways not foreseen by the manufacturer or the operator, and neither parties may have direct control when a bad outcome occurs. Consider an altered scenario of the self-driving Tesla incident that occurred in 2016 when the Tesla collided with a trailer truck, resulting in the first lethal death from a self-driving Tesla.5 Suppose, from the manufacturer's side, that Tesla had properly designed, tested, and validated the car, and that no obvious malfunction occurred. Under those conditions, it may seem unintuitive to blame the manufacturer. Suppose also, from the passenger's side, that there was little meaningful opportunity to intervene because the car was operating autonomously at the time of the crash. In this scenario, Matthias would argue that a responsibility gap emerges because neither the manufacturer nor the operator appears to possess sufficient control over the harmful outcome.",
      "As it turns out, in the actual incident, the driver was allegedly watching television and failed to yield to the Tesla, while the Tesla's system incorrectly interpreted the bright side of the trailer as part of the sky (98). With these additional facts, it becomes more clear as to how responsibility should be attributed; it can be split among all parties involved. However, even if we suppose that no manufacturing or operational issues existed, this situation still does not suggest that moral responsibility disappears altogether. Instead, it would show that autonomous systems require more clear structures of human oversight (99). As Max Tegmark argues, autonomous systems still require \"a human operator to monitor the system and change its behavior if necessary\" (99). If this safeguard were properly incorporated into the autonomous vehicle, then responsibility may be attributed to the operator for failing to intervene. Conversely, if the safeguard were not properly incorporated into autonomous vehicles, then responsibility may fall on the part of the manufacturer or the designer for oversight. In either case, it seems that the problem does not result in a complete absence of responsibility, but an increased difficulty of distributing responsibility among the relevant parties involved.",
      "Additionally, \"control failure\" as described by Tegmark remains a common issue among non autonomous systems as well (99). He provides the example of Air France Flight 447 crashing into the Atlantic Ocean as another example of machine-human communication error (99). This case is structurally similar to the Tesla example in that the crashes both involved failures in communication between human operators and the vehicle systems. However, the Air France case is often described as a tragic accident involving multiple contributing factors as opposed to a responsibility gap. Matthias would most likely also not attribute this crash as a responsibility gap given that the aircraft itself was not an autonomous learning system. This example helps clarify the difference between an accident involving moral luck and a genuine responsibility gap. In many cases, accidents involving moral luck makes it difficult to assign the exact degree of moral responsibility for each agent involved. However, this is different from claiming that moral responsibility disappears altogether. If Air France is treated as an accident involving machine-human control failure rather than a responsibility gap, then it is unclear to me why the Tesla situation is significantly different. Both cases involve complex technology, imperfect human control, and failures in human-machine interaction. It seems that many situations involving AI that initially appear to generate responsibility gaps are better understood as cases involving accidents, moral luck, and distributed responsibility rather than genuine absence of moral responsibility.",
      "The Tesla scenario shows why accidents influenced by moral luck are often conflated with responsibility gaps. Matthias may counter by arguing that the idea of moral luck indicates that we do not have control over the situation and thus, cannot be held morally responsible for the action. While I agree with his intuition that some form of control is a necessary condition for moral responsibility, I would once again argue that the form of control Matthias seems to rely on is too demanding. As Nagel discusses in Moral Luck, the idea of control as a necessary condition for moral responsibility creates a paradox when one realizes that most outcomes are heavily influenced by luck and factors beyond our control (25). However, Nagel continues by arguing that despite the diminished amount of control we have in cases attributed to moral luck, we cannot stop holding people morally responsible for what they do because we intuitively judge people for their actions (34).7 While Nagel ultimately does not fully resolve his paradox regarding control and moral luck, it seems that the form of control relevant to making decisions under which one could be held morally responsible is not necessarily undermined by moral luck. Individuals do not necessarily need to have complete control over every outcome or consequence. They can still be held morally responsible if they are able to exercise control over how they deliberate, form intentions, and act within the uncontrolled circumstances they may face. Similarly, although AI systems introduce an element of unpredictability that might involve moral luck, this does not undermine moral responsibility. Humans still make decisions about how AI systems are designed, deployed, and regulated. Even when moral luck affects the outcome, responsibility can still be assigned to those human decisions. Therefore, the involvement of AI does not create a genuine responsibility gap simply because the outcome is harder to predict. It only shows that moral responsibility may be more difficult to assign precisely to the specific parties involved.",
      "At the current stage of AI development, it is not clear to me that a true responsibility gap exists. However, as AI systems become more advanced, it is possible that they may reach an intermediate stage in which they possess some form of moral agency but still cannot be held fully morally responsible. Full moral responsibility generally requires consciousness, moral understanding, and the ability to deliberate and act in accordance with one's deliberations. Without these capacities, an AI system may only be simulating reasoning or producing outputs based on learned patterns. However, if future systems become capable of more genuine reasoning, they may begin to resemble agents that have some form of moral agency without having full moral responsibility. This is where a genuine responsibility gap could potentially emerge.",
      "The intermediate stage in which an AI system may possess some form of moral agency but not full responsibility could potentially be understood by considering the case of a young child. When a child is young, they are in the process of becoming an autonomous moral agent, capable of being assigned moral responsibility. However, until they reach a certain capacity under which they are able to \"know better\" or to reason effectively, we may not be able to assign them full moral responsibility. If a young child performs a morally blameworthy action, some responsibility may fall on the parents, since parents are responsible for raising the child and teaching them right from wrong. However, this responsibility seems secondary and incomplete because the parents did not perform the action themselves. Even if one argues that the parents are indirectly responsible for bringing the child into existence or shaping the child's moral development, this does not seem to capture the full responsibility for the child's action. At the same time, the child may not yet have the capacity required for full blame. In this kind of case, either a responsibility gap emerges, or we must attribute some degree of responsibility to the child despite their incomplete moral agency.",
      "A similar issue could arise with future AI systems. If AI systems become morally autonomous enough such that the blame cannot be attributed to the manufacturers and operators or to moral luck, but also not morally developed enough such that we would be able to hold the system itself morally responsible, a genuine responsibility gap would seem to arise. While current AI systems do not seem to have reached this intermediate stage, it is possible that within a few years, true responsibility gaps will develop. However, until an AI system is able to reason in a way that is not an imitation of patterns, the perceived gap in responsibility can be attributed to moral luck or distributed to the manufacturers and operators."
    ],
    "footnotes": [
      {
        "label": "1",
        "text": "Fischer's idea of reasons and reasons-responsiveness/as outlined in my midterm paper"
      },
      {
        "label": "2",
        "text": "Karen Hao Empire of AI"
      },
      {
        "label": "3",
        "text": "ML Physics Poster Presentation at Yale"
      },
      {
        "label": "4",
        "text": "Paul Grimstad Polymath in Age of AI Talk / Alan Turing Computing Machinery and Intelligence"
      },
      {
        "label": "5",
        "text": "Max Tegmark Life 3.0 pg. 99"
      },
      {
        "label": "6",
        "text": "Matthias pg. 176 Mars example"
      },
      {
        "label": "7",
        "text": "Nagel Driving example"
      }
    ],
    "worksCited": [
      "Grimstad, Paul. \"The Usefulness of Useless Knowledge.\" Interested in Everything and Nothing Else: On the Polymath, forthcoming, Princeton UP, 2027. Chapter excerpt for Elm Institute, 10 Apr. 2026.",
      "Hao, Karen. Empire of AI: Dreams and Nightmares in Sam Altman's OpenAI. Penguin Press, 2025.",
      "Khler, Sebastian, Neil Roughley, and Hanno Sauer. \"Technologically Blurred Accountability? Technology, Responsibility Gaps and the Robustness of Our Everyday Conceptual Scheme.\" Moral Agency and the Politics of Responsibility, edited by Cornelia Ulbert, Peter Finkenbusch, Elena Sondermann, and Tobias Debiel, Routledge, 2017.",
      "Matthias, Andreas. \"The Responsibility Gap: Ascribing Responsibility for the Actions of Learning Automata.\" Ethics and Information Technology, vol. 6, 2004, pp. 175-83.",
      "Nagel, Thomas. \"Moral Luck.\" Proceedings of the Aristotelian Society, Supplementary Volumes, vol. 50, 1976, pp. 137-51.",
      "OpenAI. ChatGPT. GPT-5.5 Thinking, 7 May 2026, chat.openai.com/. Used to ask clarifying questions regarding current AI developments. Also used to create Works Cited and for fixing grammar and spelling errors.",
      "Tegmark, Max. Life 3.0: Being Human in the Age of Artificial Intelligence. Alfred A. Knopf, 2017.",
      "Turing, A. M. \"Computing Machinery and Intelligence.\" Mind, vol. 59, no. 236, 1950, pp. 433-60."
    ]
  },
  {
    "slug": "defining-art-aesthetic-judgment-and-an-asian-american-artist",
    "title": "Defining Art: Aesthetic Judgment and an Asian American Artist",
    "category": "Personal Essay",
    "links": [
      {
        "text": "Click this link",
        "href": "https://youtu.be/_5isRPTn6GE?feature=shared&t=1"
      },
      {
        "text": "Open this link",
        "href": "https://www.youtube.com/watch?v=qxsP-FMu38U"
      },
      {
        "text": "La Terre est un Homme",
        "href": "https://youtu.be/_5isRPTn6GE?feature=shared&t=1"
      },
      {
        "text": "Patty Chang's Melons (At a Loss)",
        "href": "https://www.youtube.com/watch?v=qxsP-FMu38U"
      }
    ],
    "body": [
      "How has aesthetic subjectivism impacted our taste and our perception of what constitutes art?",
      "\"I once had a TA at the School of the Art Institute of Chicago's pre-college program who would ask her friends for live naked references to practice figure studies. I didn't find it particularly odd. At least not as odd as my peers. Just a bit random and unnecessary. It wasn't until earlier this year that I grasped the true beauty of the human form. Very few times in my life have I stopped, looked at something, and thought \"wow that's truly beautiful.\" It's heartbreaking to see beauty tarnished by the unblessed hands of humans. Oh, to fail a figure study. How boring. How mundane. I will leave creation up to the select few: God, Andrew Wyeth, Burberry, Bach, Zaha Hadid, Wordsworth, Billie Eilish, and Michelangelo.\"",
      "4:39 am, 26 December 2024",
      "- Helen Qi:\"The Banality of Man\"",
      "Instructions:",
      "Click this link before reading further and play the audio on 75-80% volume with both earbuds in your ear.",
      "Open this link on a separate large screen and turn the audio off. Play it in the background throughout the duration of the reading. Ensure that you are able to glance at the screen throughout.",
      "The Abstract",
      {
        "type": "image",
        "src": "/images/essays/defining-art/dysphoria.jpg",
        "alt": "Blue abstract painting riffing on Casa Batllo",
        "caption": "Qi, \"Dysphoria,\" Riff on Antoni Gaudi \"Casa Batllo\""
      },
      "This project critiques aesthetic subjectivism by examining how it has reshaped our conception of taste and what qualifies as art. In contemporary practice, the view of aesthetic judgment as a purely subjective matter has contributed to the erosion of objective taste, allowing \"art\" that lacks aesthetic coherence, structure, or technical skill to be treated as equally valuable to art that speaks for itself.",
      "My project attempts to immerse the reader in an experience that is deliberately self-undermining by employing instrumental artistic techniques that it ultimately criticizes. The experience incorporates elements that are intentionally disorienting to produce a mildly uncomfortable aesthetic experience. The project tests the claim that all art is equally worthy of attention. While this project does not attempt to define a fully formed theory of standards under which people should evaluate visual arts, it aims to show that without shared standards, the distinction between \"good\" and \"bad\" art collapses.",
      "The Collapse of Aesthetic Judgment",
      "Subjectivism in art is the idea that aesthetic value is derived purely from the \"perceiving subject or spectator, not...the work of art\" itself (Lichtenbert 109). So long as the spectator views the work of art as valuable, the art retains value. Without the ascription of value from the audience, the art is itself a neutral object (Tatarkiewicz 157). Because proponents of subjectivism believe that the aesthetic value of art is rooted in the individual, high variability exists across different people and different cultural or social groups. Art is reduced to aesthetic relativism, a framework that the average person accepts without resistance. Yet this phenomenon is far less pronounced in other artistic mediums. In literature, standards for what counts as \"good\" writing appear relatively stable, reflected in widely recognized benchmarks such as the New York Times",
      "\"10 Best Books of the Year\" list. Music seems similarly shaped by popularly agreed upon metrics, like Billboard \"Year-End Hot 100.\" Within the visual arts community, an equally clear or broadly accepted set of standards do not exist, making consensus around aesthetic quality far more elusive.",
      "The appeal of subjectivism in the visual arts may initially seem intuitive: people naturally find different things visually pleasing (Lichtenbert 109). But this reasonable deviation in intuitive taste is also common in literature and music, yet it does not eliminate the practice of critical evaluation. I posit that subjectivism has gained greater acceptance in the visual arts not because it is more justified, but because viewers have grown less accustomed to engage in sustained reflection for what they see. The act of analytically processing visual images differs in approach from the experience of reading or listening to music. Because visual stimuli saturate everyday life, we tend to encounter images passively, without sustained evaluation. Once the photons are detected by the eye, the process of critical judgment and interpretation seems to stall at the basic level of visual perception. By contrast, reading a book and listening to music demand a more active form of attention, requiring us to consider the material over time. As a result, visual art is often less rigorously examined, while literature and music more naturally invite deliberate interpretation and judgment. And, as subjectivism becomes the default framework for visual arts, it further weakens the habit of thoughtful interaction, creating a self-reinforcing cycle where the absence of standards and the decline of critical engagement sustain one another.",
      "\"The flower bloomed and faded. The sun rose and sank. The lover loved and went.\" And what follows, I will never know because what is modern anyways?",
      "- Helen Qi, Frustrated Reflections on \"Orlando\"",
      "Modern visual artists appear acutely aware of this shift towards subjectivism. As Fredric Jameson argues in Postmodernism, the \"death of the subject\" marks the \"end of the distinctive individual brushstroke\" (64). Instead of developing art that derives from the individual, aesthetic creation has become commoditized. Artists instead turn to \"pastiche\" or \"avant-garde\" alienation at the expense of genuine origination. The result is a surge in the production of what is labeled \"art,\" accompanied by a marked decline in quality. The masses engage online in TikTok pendulum \"artists\" who create unelaborate designs by swinging a leaky bucket of paint across a canvas. Amateur artists fall into \"the primacy of mechanical reproduction,\" mimicking the style of the greats without establishing any original thought of their own (Jameson 64). Together, these trends reinforce the emerging cultural idea that \"anyone can be an artist\" as long as they are creating content.",
      "On the flip side,\"high art\" masquerades under ego and pretentiousness, blaming the audience for not understanding the artist's ingeniousness. Audiences, wary of seeming uncultured or insensitive, defer uncritically to the artist's stated intent. Critics, too, fall into the same trap. In this way, the modern \"high\" artist benefits from the deferential ignorance of the masses at the expense of the quality of art. The result becomes art that grows increasingly more nebulous, to the point where even a stack of books can be presented and received as part of an art exhibition. This shift towards subjectivism both alienates audiences from so-called \"high\" art and drives the masses towards a broader consumption of oversaturated noise that masquerades as art. When aesthetic judgment becomes subjective, the distinction between good and bad art becomes meaningless. Under this framework, how can we decide what art should be exhibited?",
      "Expression or Instrument: Politics",
      "\"What is hell? I maintain that it is the suffering of being unable to love,\" to feel, to express, and to deliberate.",
      "- Helen Qi, Frustrated 3 am Riffs off \"Brothers Karamazov\"",
      "Under both a subjectivist and objectivist framework, a piece of art is typically evaluated holistically with the intention of the artist in mind. More recently, art competitions such as the Scholastic Art and Writing Competition require artists to submit a statement of intent, encouraging artists to convey a meaning or message through their art. The art that has the most interesting or impactful message is often the piece that gets chosen for the exhibition. These works often relate to current events, politics, or identity.",
      "The art of the 20th century reflects the turmoil of the World Wars and the changing socioeconomic conditions of the world. Picasso's colossal 1937 oil painting, Guernica, depicts the tragedies of the Spanish Civil War. The idea of political art is not particularly modern nor novel, yet the 20th century seemed to result in a surge of political art from Asia and the \"non-Western World\" (Mitter 531). These developments are inextricably linked to the political and socioeconomic conditions of the era. In China, modern art in the 1980s reflected a response to the Cultural Revolution and much of it was later suppressed or censored. In colonized countries, artists responded to the radical shift initiated by Fauvism and Cubism as \"its revolutionary message furnished ammunition for cultural resistance\" (Mitter 533). In this context, political art served as a crucial vehicle for artists to express ideas when speech was limited. This connection between art and political response continued into the 21st century.",
      "While political and historical contextualizations matter under both the subjectivist and the objectivist views, the key difference between the work of the masters and most modern art pieces is that modern political art often cannot stand on its own. In contrast, Guernica communicates powerfully even without knowledge of its political significance. The work is visually striking: the distorted, Cubist figures, the screaming faces, the grayscale palette, and the impressive scale of the canvas all convey the violence of war. Even without historical knowledge, viewers can recognize the chaotic devilish animals, the crying child, and the ghost-like forms. The painting is immediately expressive, without needing external context to be understood. It feels like a scene straight from hell.",
      {
        "type": "image",
        "src": "/images/essays/defining-art/guernica.jpg",
        "alt": "Picasso Guernica reference image",
        "caption": "Pablo Picasso, \"Guernica,\" Oil on Canvas",
        "size": "full"
      },
      "On the other hand, consider something like Ming Fay's mixed media work Cross-Balance (Geno 65). At first glance, the work appears to be situated on a grid with images placed to create a sense of balance. Looking closer, we notice the fragmented body parts - eyes, mouth, hands - yet each seem displaced. There are also small figurines and guns, similar to objects from a board game. The overall impression is playful and whimsical, almost like a young boy's bedroom shelf. However, the caption explains that Cross-Balance is a piece on colonialism. Fay created the work for an exhibit on the Israeli-Palestinian conflict, drawing on symbols related to Japanese colonization and his experiences in Palestine. He describes the piece as suspending elements of \"repression and control...in space\" to reflect a \"volatile time\" (Geno 65). Yet without this explanation, the work does not clearly communicate that message. It required further written or verbal explanation. Unlike Guernica, its political meaning does not come through on its own.",
      {
        "type": "image",
        "src": "/images/essays/defining-art/cross-balance.jpg",
        "alt": "Ming Fay Cross-Balance mixed media reference",
        "caption": "Ming Fay, \"Cross-Balance,\" Mixed Media",
        "size": "small"
      },
      "\"If I could say it in words there would be no reason to paint.\" If there is a reason to paint, then the artist could not have said it in words. When the words of the artist hold more authority than the painting itself, the artist failed. Or, they succeeded in deceiving you.",
      "- Helen Qi, Frustrated Argument Reconstruction of Edward Hopper",
      "Growing up, I participated in a lot of classical music and visual art competitions. In the classical music world, competing is a viable path towards fame. When I was 10, I would watch Queen Elisabeth and Menuhin Competition the same way that grown men watch football. During the awards ceremony, my friends and I would always find reasons to be upset with the results. Either the student who won had a teacher on the judging panel or some other form of musical politics masked the objective \"true\" winner. Still, while standards for judging classical music competitions allow for some reasonable variation among qualified players, they remain generally merit based rather than random or nebulous.",
      "The same cannot be said about visual art competitions. They are a crap shoot. Early in high school, I realized that success in art competitions had less to do with the quality of the work itself and more to do with how it was packaged. Titles and descriptions are usually added by the artist after the piece is finished, yet they often entirely shape how a work is judged. If I wanted to win, I had to choose a compelling title. Senior year, I drew a self-portrait of my seven-year-old self at a rodeo, wearing a cowboy hat. I chose the image simply because I looked cute and happy. When it came time to submit the piece, my mom suggested the perfect title: \"American.\" With a single word, the meaning shifted. Just like that, a work of expressive happiness transformed into a political statement. \"Children of immigrants are Americans too.\" It felt inauthentic and artificial. The title reframed the painting as a statement on belonging, highlighting Chinese-American identity, the rise in anti-Asian racism following Covid-19, and discrimination in the Trump Administration. It (undeservingly) won the Best in Show Award.",
      {
        "type": "image",
        "src": "/images/essays/defining-art/american.jpg",
        "alt": "Self portrait titled American",
        "caption": "Qi, \"American,\" Pastel on Paper"
      },
      "As discussed, both the subjectivist and objectivist frameworks of understanding art fundamentally encourage the viewer to consider the historical and political implications of the work, revealing layers of meaning that might not be immediately visible to the audience. However, this creates a second risk: deception. Viewers fall into the artist's trap of accepting the artist's explanation without questioning whether it is supported by the art itself. An objectivist framework is less vulnerable to this as it requires the value of the art be derived first from the art itself. A subjectivist framework, by contrast, is more susceptible to this kind of deference. In these cases, art becomes instrumental, valued for what the artist claims it represents rather than for its aesthetic qualities. But this practice undermines the point of art itself: aesthetic expression.",
      "Identity and Abstraction",
      "I am Asian American. My art is Asian American. Yet I have never felt defined by my Asian Americaness. Instead, I subconsciously use it to artificially create meaning. I exploit my unique experience to draw attention towards myself. I am an egoist. But my Asian American identity is inextricably tied to my art. It wasn't until I began compiling a list for this project that I realized how many of my works were inherently related to my Asianness. Am I performative?",
      {
        "type": "imageGrid",
        "images": [
          {
            "src": "/images/essays/defining-art/king-jet.jpg",
            "alt": "King Jet painting",
            "caption": "Qi, \"King Jet,\" Acrylic on Canvas"
          },
          {
            "src": "/images/essays/defining-art/american-in-zhangjiajie.jpg",
            "alt": "American in Zhangjiajie painting",
            "caption": "Qi, \"American in Zhangjiajie,\" Acrylic on Prepared Surface"
          },
          {
            "src": "/images/essays/defining-art/waigong.jpg",
            "alt": "Waigong painting",
            "caption": "Qi, \"Waigong,\" Acrylic on Canvas"
          },
          {
            "src": "/images/essays/defining-art/music-of-art.jpg",
            "alt": "The Music of Art painting",
            "caption": "Qi, \"The Music of Art,\" Ink on Watercolor Paper"
          },
          {
            "src": "/images/essays/defining-art/black-swann.jpg",
            "alt": "Black Swann hairpin",
            "caption": "Qi, \"Black Swann,\" 3D Printed Chinese Hairpin"
          },
          {
            "src": "/images/essays/defining-art/borgcelain.jpg",
            "alt": "Bor(g)celain jug",
            "caption": "Qi, \"Bor(g)celain,\" Pen and Ink on Jug"
          }
        ]
      },
      "In Judith Butler's article \"Performative Acts and Gender Constitution,\" Butler builds on Simone de Beauvoir's quote that \"one is not born, but rather, becomes a woman\" (qtd. in Butler 519). Though Butler's discussion centers around gender identity, they make the compelling case regarding identity as \"performativity\" that becomes maintained through \"stylized repetition of acts\" (519). In this sense, identity is not fixed or natural but instead formed over time through repeated actions. When artists focus on identity in their work, they are not only expressing it, but also reinforcing it. This signals a predictable, recognizable pattern of the artist to the viewer. While this kind of signaling can help communicate meaning, the intrinsic aesthetic value of art is diminished when identity, which is so closely tied to meaning, becomes the primary focus of a piece of art. The heavy signaling employed in Amy Khang's Moving Toward Home Exhibition is perhaps the reason that the exhibition feels aesthetically unsatisfying. The value of the exhibition is derived from the performance of solidarity and political activism which shapes the identity of the artists, overlooking the intrinsic aesthetic value of art (Khang 1). But can performative insertion of artificial meaning truly compensate for aesthetic failure? Why are we categorizing these political messages as \"visual art\" as opposed to activism? Perhaps activism is where these \"artists\" should instead focus their energy.",
      {
        "type": "image",
        "src": "/images/essays/defining-art/moving-towards-home.jpg",
        "alt": "Amy Kahng Moving Towards Home exhibition reference",
        "caption": "Amy Kahng, Moving Towards Home Exhibition",
        "size": "smaller"
      },
      "The High Bar for 21st Century Art",
      "\"My problem is that I thought realism was about accuracy. Reality, though, has nothing to do with what you see. It's about feeling. So why would I think realism is not the same?\"",
      "- Helen Qi, Frustrated Midnight Musings on Figure Studies, Sketchbook on Spam",
      "Since the invention of photography, the standard for visual art has shifted. Technical skill alone cannot distinguish artists the way it once did. The goal of perfectly replicating reality became essentially obsolete, as humans cannot possibly compete with emerging camera technology. If technical skill can no longer distinguish artists, the only things that can are taste, expression of ideas, and ability to emotionally touch the audience through the art itself. The value an artist adds must go beyond the constraints of the written word and the pixelated image.",
      "John Takami Morita etching of the \"Children of Jabalya Camp\" photograph in his exhibition serves as an example of a work that, in my opinion, successfully retains an aesthetic value beyond the mere photograph. In translating the photograph into an etching, Morita introduces clear visual and stylistic shifts including changes in texture, line, and emphasis, that reflect his deliberate artistic choices. These transformations alter the emotional resonance of the image, allowing the etching to stand as an independent work rather than a mere commercial reproduction. As a result, this piece prioritizes its aesthetic component of the artwork. While the political context and message serve as a means for the audience to better understand the circumstances behind which the art is created, the pure aesthetic value of the etching can be clearly seen when presented next to the original.",
      {
        "type": "image",
        "src": "/images/essays/defining-art/morita-children-of-jabalya.jpg",
        "alt": "Children of Jabalya Camp photograph and etching comparison",
        "caption": "John Takami Morita, \"Children of Jabalya Camp,\" Photograph and Etching",
        "size": "full"
      },
      "In an era shaped by new technology, AI-generated images, and widespread aesthetic subjectivism, it is difficult to define clear standards for evaluating visual art. Yet subjectivism has failed precisely because it has succeeded: by placing full authority in the audience, it has weakened the role of inherited standards and critical judgment. The result is an oversaturation of low quality work and a tendency to blindly defer to the artist's word.",
      "This project employs \"avant-garde\" methods to take an \"avant-garde\" approach in critiquing the aesthetic conventions shaped by avant-garde artists of the twentieth century. At the beginning of this essay, I encouraged the reader to listen to an example of contemporary classical music and watch a silent performance while engaging in the text. La Terre est un Homme by composer Brian Ferneyhough serves as an extreme example of a modern classical music parallel to 21st Century \"high-art,\" employing maximalism to challenge existing tonal standards. The Guardian describes the piece as \"massive and mesmerizing\" but you most likely turned off or turned down the audio in order to be able to engage with the reading. The piece visually looks like the composer smeared ink over the page and audibly sounds like a massive car crash. Patty Chang's Melons (At a Loss) similarly employs avant-garde alienation and perversity to offend our aesthetic sensibilities and societal norms. While Patty Chang tells a story throughout her performance, I particularly wanted the reader to engage with the visual component in isolation and view this as a work of performance-based visual art. Without context, the reader becomes more actively tuned to the odd display. Only at this point does the reader explore the fullest extent of their imagination and ask, \"what is going on here?\"",
      "The process of exploring these two mediums in the background of the essay diverts the readers' attention from experiencing both works completely. It simulates the immediate reactions that a spectator may have when they look at visual arts. After finishing this essay, the reader should return to the instructions and experience both works again. How the reader chooses to do so is up to their own discretion; the important part is that the reader takes time to engage with both works critically. The improvement of modern art requires more careful aesthetic judgment from critics, genuine innovation from artists, but most importantly, stronger discernment from audiences. Art should speak for itself and the audiences should listen."
    ],
    "footnotes": [
      {
        "label": "1",
        "text": "I decided to include images throughout the paper as they are referenced in order to aid with visual understanding."
      }
    ],
    "worksCited": [
      "Antoinette, Michelle. \"Epilogue: \"My Future is Not a Dream\": Shifting Worlds of Contemporary Asian Art and Exhibitions.\" Contemporary Asian Art and Exhibitions: Connectivities and World-Making, by Michelle Antoinette and Caroline Turner, ANU Press, 2014, pp. 233-243.",
      "Butler, Judith. \"Performative Acts and Gender Constitution: An Essay in Phenomenology and Feminist Theory.\" Theatre Journal, vol. 40, no. 4, Dec. 1988, pp. 519-531.",
      "Chang, Patty. \"Melons (At a Loss) (1998).\" YouTube, uploaded by Back to the Past, youtu.be/qxsP-FMu38U.",
      "Deneen, Patrick J. Why Liberalism Failed. Yale University Press, 2018. doi.org/10.12987/9780300231878.",
      "Ferneyhough, Brian. \"La Terre est un Homme, for Orchestra (1976-79).\" YouTube, featuring BBC Symphony Orchestra, conducted by Martyn Brabbins, youtu.be/_5isRPTn6GE.",
      "Jameson, Fredric. \"Postmodernism, or, The Cultural Logic of Late Capitalism.\" New Left Review, no. 146, 1984, pp. 53-92.",
      "Kahng, Amy. \"Moving towards Home: Building a Cultural Front for Palestinian Liberation.\" Subtitled NYC, 2024, subtitlednyc.com/Moving-towards-Home-Art-for-Palestine-in-New-York-City-1989-2024.",
      "Lichtenbert, Robert H. \"In Defense of Objectivist Art Criticism.\" The Journal of Aesthetic Education, vol. 18, no. 4, Winter 1984, pp. 108-113. University of Illinois Press. JSTOR, www.jstor.org/stable/3332635.",
      "Mitter, Partha. \"Decentering Modernism: Art History and Avant-Garde Art from the Periphery.\" The Art Bulletin, vol. 90, no. 4, Dec. 2008, pp. 531-548. CAA. JSTOR, www.jstor.org/stable/20619633.",
      "Morita, John Takami. Large Photo / Etchings. 8 Dec. 2010. John Morita, www.johnmorita.com/johnmorita/large_photo_etchings.html#9.",
      "Ong, Monica. Planetaria: Visual Poetry. Foreword by John Yau, Proxima Vera, 31 May 2025.",
      "Picasso, Pablo. \"Guernica.\" Museo Nacional Centro de Arte Reina Sofa, www.museoreinasofia.es/en/collections/artwork/guernica-0.",
      "Rodriguez, Geno. \"Occupation and Resistance.\" Occupation and Resistance, Alternative Museum, 1990, pp. 18-70.",
      "Tatarkiewicz, Wladyslaw. \"Objectivity and Subjectivity in the History of Aesthetics.\" Philosophy and Phenomenological Research, vol. 24, no. 2, Dec. 1963, pp. 157-173. International Phenomenological Society. JSTOR, www.jstor.org/stable/2104458."
    ]
  },
  {
    "slug": "the-failure-of-the-20th-century",
    "title": "The Failure of the 20th Century",
    "category": "Cultural Critique",
    "links": [
      {
        "text": "Bach's D minor Chaconne",
        "href": "https://youtu.be/SrjIMBpwuK4?si=NX7vgoDN6I9DGWUG&t=411"
      },
      {
        "text": "Mahler's Symphony No. 1 Strmisch bewegt - Energisch",
        "href": "https://youtu.be/whBRRIxl-BI?feature=shared&t=1"
      },
      {
        "text": "Take twenty focused minutes",
        "href": "https://youtu.be/whBRRIxl-BI?feature=shared&t=115"
      },
      {
        "text": "Piano Trio No. 2 in E Minor",
        "href": "https://youtu.be/tKcxN-ALbfY?feature=shared&t=377"
      },
      {
        "text": "4'33",
        "href": "https://youtu.be/JTEFKFiXSx4?feature=shared&t=47"
      },
      {
        "text": "La Terre est un Homme",
        "href": "https://youtu.be/_5isRPTn6GE?feature=shared&t=1"
      }
    ],
    "body": [
      "Let me attempt to read your mind: classical music is too hard to understand, snobbish, not particularly interesting, and Taylor Swift is better. To a certain degree, you're right. Telling someone your favorite genre is classical music feels about the same as telling someone you go to Yale. (The most common response to both admissions? A blend of \"good for you\" and \"gross.\") I get the seductive allure of the \"hard pass.\" Even as someone who has been trained in classical music, I still stubbornly refuse to listen to minimalist composers because they are boring and unnecessarily abstract. Only yesterday did I discover that John Adams actually has the ability to write good music.",
      "No matter your musical preferences, it's hard to dispute that we live in a fallen time for classical music. Audience literacy is not what it used to be, composers no longer prioritize the audience, and everyone has a different conception of what actually qualifies as music. From the blank page to the final performance, classical music has regressed. Composers have experimented with extended technique, unintelligible noise, and drones intended to bore an audience, challenging the previously accepted common practices in music.",
      "Classical music has produced composers I guarantee you will not want to listen to, but it also has produced masterpieces that are meant to be heard. Let me give you a few examples. I have linked my personal favorite recordings that, in my opinion, capture the true essence of the compositions.",
      "About halfway through Bach's D minor Chaconne, the solo violin plays the most organic polyphonic melody ever written in the history of Western music. Immediately following the climax and the recapitulation of the theme, the built-up tension is released in a single breath before the first delicate D-F sharp third. The melody begins with two distinct voices in perfect balance, contrasting the previous D minor section. Then, a third voice joins in, floating on top of the first two voices with a descending D major scale. It's ethereally beautiful. I imagine myself sitting alone on the floor inside Baslica de la Sagrada Famlia in Spain, staring at the architectural genius of God and Gaud (not that Bach would have done that. He was protestant and German).",
      "Some people find it lame that I think Bach represents the ideal in classical music. Classical musicians have a notorious reputation for being prideful and elitist. Even within the community, some pieces retain a fancier, less basic, status. When I first started listening to music, I told my mother that a teacher said she enjoys Mahler symphonies. My mother responded by saying my teacher must be a \"highly intelligent person\" because Mahler's symphonies are difficult to understand and more niche. In a way, liking a Mahler symphony appears quirkier than liking an overplayed piece by a famous composer like Bach. Though now I would not consider Mahler one of the more melodically inaccessible composers to the amateur, Mahler's symphonies are admittedly difficult to grasp due to their size.",
      "Writing just after Wagner introduced the tritone in Tristan und Isolde, and before the craziness of the 20th century, Mahler Symphonies represent the peak of tonality's expansion inside common practice. Composers who attempted to expand tonality following the Wagnerian tradition post-Mahler did not receive the same recognition as Mahler. These symphonies of unparalleled lengths employed massive orchestras to produce blaring levels of sheer sound. The",
      "Fourth Movement of Mahler's Symphony No. 1 Strmisch bewegt - Energisch begins with a cymbal crash and a timpani roll, awakening unsuspecting listeners who may have dozed off at the placid timpani beat ending the third movement. The opening three minutes of this twenty-minute-long movement keep both the players and the audience's hearts pounding through the first \"stormily agitated\" section. Reaching its first explosive climax just two minutes into the piece, the orchestra players must collectively glue their eyes to the conductor as the tempo ritards and the volume increases, building towards a sudden accelerando that marks the long-awaited release in tension. The complexity of the instrumentation alone , complete with seven horns, five trumpets, four trombones, and two timpani players, is grand and terrifying. Mahler symphonies cannot fully be appreciated while simultaneously scrolling on Tik Tok or studying for a math exam. Take twenty focused minutes to listen to the fourth movement on full volume and I guarantee that something will strike you.",
      "I often wonder how a mortal could design such an organized sound in their head. Where Bach produces the most pure, uncrowded form of music through harmonic balance, Mahler provides the largest digestible palette of timbral color through sheer instrumental range. Bach touches the soul and Mahler pulls on the heart. In my opinion, both pieces speak to the truest form of Humanity, something composers that followed fell short of achieving. Through opposite approaches, both composers produced a uniquely masterful quality in their music that proved to be legible to audiences in the 19th century. And then it crumbled.",
      "The wars of the 20th century changed discourse in just about every industry. It marks the beginning of an unprecedented age of music. People stopped attending live concerts, instead conveniently listening to recordings whenever and wherever. Contemporary composer John Cage warned against recordings stating, \"Let no one imagine that in owning a recording he has the music.\" Although I love recordings and spend 90% of my free time meticulously choosing recordings for my playlists, the popularity of recordings in the 20th century resulted in a loss of appreciation for music's complexity. Instead of sitting down at a concert for two hours to appreciate music for its own sake, people now had the option to listen to music while studying or doing other menial tasks. Additionally, as a result of the political discord, music education no longer became a priority, not as many households owned pianos, and music could no longer be represented the same way as it was before the turn of the century. In just fifty years, music evolved from the peak of tonality's expansion to, in my opinion, its utter destruction.",
      "In an attempt to stay up-to-date amidst the cultural destruction, composers decided to take a risk. Enter the beginning of tonality's destruction: the twelve-tone system. Associated with Schoenberg and the Second Viennese School, the twelve-tone system seemed to mirror the political discord of the time. Each note had a communist-like status.",
      "This new method of constructing music resulted in a few intriguingly dissonant, almost exotic-sounding works. Composers like Stravinsky, Prokofiev, and Shostakovich employed various technically different, yet similar tonal techniques when creating their music. Parts of each piece contained atonal elements categorized by seemingly \"wrong\" notes and chromaticism. Atonality is inherently more esoteric than the lush tonal melodies of the Romantics. However, some early 20th-century composers used rhythm to create a strong structure within the piece, allowing a gateway for audience accessibility.",
      "Consider the last movement of Shostakovich's Piano Trio No. 2. The piece itself is quite dissonant and musically confusing to put together but, in my opinion, considerably more accessible than other borderline atonal pieces because of Shoatakovich's rhythmic precision. Depending on the performance, the Piano Trio could turn into a complete disaster of illogical noise or come together to express one's darkest feelings. Each section is hauntingly anxious, evoking either controlled or suppressed terror. Unfortunately, it often dissolves into illogical noise, even among professionals. I contend that only the Stern-Ax-Ma trio plays it successfully. Although David Oistrakh's violin playing in his trio's interpretation may exhibit more musical subtleties than Isaac Stern's, and Martha Argerich's interpretation demonstrates the musical depth of the piano in a way Emanuel Ax does not, the overall performance of the Stern-Ax-Ma trio rhythmically exceeds any other recording. It possesses a logical sense throughout the entirety of the movement. Not once do I question whether they failed to adhere to Shostakovich's score. For this reason, you would not be able to pay me to switch out the Stern-Ax-Ma recording for any other. To fully judge the quality of music, one must consider both the piece itself and its collective performance. Even some of the most renowned musicians of the time cannot fully do the Piano Trio justice. For this reason, some (including myself) may argue that Shostakovich represents the highest extreme of classical works that can be considered accessible.",
      "While Shostakovich's work is undeniably successful and ingenious, it begins to challenge the boundaries of what people consider music, reflecting a characteristic of compositions from the World War II era. After the war, classical music further tested the cultural boundaries but diverged distinctly in approach. Music either became tonally more ambiguous and convoluted, or it embraced minimalism as a result of cultural breakdown. A few composers \"deliberately challenged or alienated audiences,\" calling their strategy \"Avant-garde.\"",
      "Today, you can open Google and type \"contemporary music\" into the search bar. If you scroll to \"Discussions and Forums\" you find \"So what's the point of Contemporary music?\" r/classical music and \"I don't understand Contemporary music\" r/musictheory. At some point, contemporary music became so alienated from the audience that people became disinterested, unengaged, and confused. When the goal of music no longer serves the purpose of eliciting an emotional response from the audience, the composer has failed.",
      "The recent decline in the popularity of classical music, I believe, could be attributed to the esoteric nature of contemporary styles. Except for the contributions of a few contemporary composers like Jessie Montgomery, John Corigliano, and Anna Clyne, experimental classical music can serve as a way for hubris-filled classical musicians to mask their lack of talent through unnecessary tricks and deliberate confusion. However, audience disinterest could also be attributed to the lack of adequate music education in the 20th century.",
      "As a result, popularity has shifted towards pop, rap, and country music, where the audience is easily included and fans are valued. Simpler and less orchestrated pop music appeared to gain popularity quickly because of their catchy tunes and boppy beats. Simplicity, however, is not the core characteristic of its popularity. Many classical musicians view pop as harmonically unsophisticated, yet avant-garde composers like John Cage and Phillip Glass compose minimalist music where a man sits at a piano, starts a stopwatch, and remains silent for 4 minutes and 33 seconds, all to prove a point. While 4'33\" has retained popularity today, it was not because of its success in showing that any auditory sound can be considered music as Cage intended. It was just easily memeable.",
      "The opposite extreme is when a composer, for no rationally explicable reason, decides to make music more heavily orchestrated than Mahler and more atonal than Schoenberg. The contemporary piece La Terre est un Homme by composer Brian Ferneyhough serves as an extreme example. The Guardian describes it as \"massive and mesmerizing\" but if you were to click on the link above, you would most likely get a migraine within ten seconds. The entire piece sounds like a massive car crash; the most mesmerizing part is that an orchestra of over one hundred people managed to perform all thirteen minutes without committing suicide. Since when does calling something \"avant-garde\" suddenly make unintelligible noise into innovative music?",
      "When a composer first creates a piece, they must recognize its potential to fail and be forgotten by time. While music in part is created for the musician, its reception by both the performer and the audience indicates its success. Premiering new music presents a unique and difficult experience for many performers. Because the frustration one faces can cloud one's perception, my conductor has always insisted that, \"You cannot form a judgment on a piece of contemporary music until after you perform it in a concert and experience the finished result.\" A performer's understanding of a piece of music invariably differs from the audience's perception. To experience something fully, one must perform it, listen to it performed, or at least give it a fair chance."
    ]
  },
  {
    "slug": "logical-impossibility-of-moral-dilemmas",
    "title": "Logical Impossibility of Moral Dilemmas",
    "category": "Philosophy",
    "body": [
      "Colloquially, the idea of a moral dilemma is used broadly to describe any moral problem or difficult moral decision. Moral problems arise whenever we must make a choice that has significant moral implications. Broadly speaking, making difficult moral decisions is not a novel philosophical concept. In fact, the very idea of a moral theory or framework is to offer a structured method or reason to adjudicate between moral problems when they arise. Moral frameworks in general will prescribe a theory of correct actions to take when one is faced with a moral problem. These theories are comprised of relevant factors that hold moral weight or moral force. From these factors, certain duties or obligations may be generated to help guide decision-making. In principle, following a moral theory should guide us toward a reasonably justified course of action when we face a moral problem.",
      "Moral dilemmas in a philosophical context (and as I will be using the term) are defined more narrowly. A true moral dilemma is one where various relevant factors generate two or more conflicting duties where both duties are duties all things considered. This means that in a moral dilemma, a person is subject to two or more moral requirements that appear equally binding, yet cannot both be fulfilled. Carrying out one obligation necessarily involves violating at least one other. Philosophers have disagreed on whether true moral dilemmas exist.",
      "Before discussing more on this debate, it's worth noting that one can theoretically construct a moral theory that yields true moral dilemmas by definition. As long as a theory identifies two equally binding but conflicting absolute duties, a moral dilemma arises. However, an adequate moral theory must be logically consistent. The question then becomes whether it is logically possible for a moral dilemma to exist. In this paper, I will argue that it is inadequate for a moral theory to generate moral dilemmas. I will attempt to work out the reasons for why moral dilemmas are logically impossible.",
      "To clarify this argument, let's first distinguish between prima facie duties and duties all things considered. When two prima facie duties conflict, or when a prima facie duty conflicts with an all things considered duty, a true moral dilemma does not arise because one duty can outweigh the other. For example, suppose I promise to meet my professor for office hours, but on the way I encounter someone who urgently needs CPR. I am the only person available to save their life. Intuitively, people would agree that saving the person's life and missing office hours as a result is a permissible action. Although I have a prima facie duty to keep my promise, this obligation is overridden by my duty to save a life. In other words, when one duty can be outweighed by another duty within the same interaction, no genuine moral dilemma occurs. While the office hour CPR example pretty clearly shows which duty takes precedence, most more complex moral problems lack such obvious distinctions. However, even when one duty is only slightly outweighed by another, the situation cannot be considered a moral dilemma. While some situations may be more difficult than others, I hold the position that most situations thought of as \"true moral dilemmas\" are not in fact moral dilemmas once we recognize that one duty overrides another. Now let's put aside the overriding principle and cases involving interactions between prima facie duties for the reason that these cases cannot illustrate true moral dilemmas.",
      "I will now turn to the logical argument against moral dilemmas and demonstrate why they cannot exist within a logical moral system. In order to ensure that the generated duties cannot be overridden by other duties, I will consider an example where the duties generated are the same but directed at different people. Let's consider Sophie's choice example: Sophie and her twins, Anabelle and Brittany, are in a Nazi concentration camp. A Nazi guard demands that Sophie choose which child will be killed: if she chooses to kill Anabelle, Brittany is spared; if she chooses to kill Brittany, Anabelle is spared; and if she refuses to choose, both children will be killed. Because A and B are twins and equally likely to survive if not chosen, there seems to be no clear basis for preferring one child over the other. Now, suppose a moral theory holds that Sophie, as a mother, has a duty not to kill her child. Sophie cannot choose to kill child B in order to save child A. If Sophie were to carry out her duty to child A, she would fail to carry out her duty to child B. Carrying out one obligation to one child necessarily involves violating the obligation to the other child.",
      "I will now explain why the dilemma in Sophie's choice appears logically impossible. In this scenario, Sophie is said to have an obligation to her child. Having an obligation to someone entails a special duty to perform certain actions with regards to that person. In other words, a person is morally required to act in particular ways; if they fail to do so, they are morally at fault. They \"ought\" to partake in that action or they are morally in the wrong. Although the term \"ought\" can be vague in various contexts, I will be using \"ought\" synonymously to morally required. If someone \"ought\" to engage in a certain activity, it then follows that they must have the ability to engage in that activity. This is the principle of \"ought implies can.\" If it is true that a person ought to do X, then it must be logically possible for the agent to do X. This principle underpins the claim that moral obligations cannot require the impossible.",
      "Although some philosophers debate whether to adopt the \"ought implies can\" principle, the principle seems intuitively reasonable (at least to me) when \"ought\" is understood to mean a morally required duty. For example, let's say a person is trapped under a car and you are a bystander walking by. Are you morally obligated to lift the car off the person? The answer seems to depend on your abilities. If you are Superman or a champion heavyweight lifter, you might indeed be obligated to do so. However, if you are a five-year-old child who can only lift 25 pounds, it would be unreasonable to hold you to that same moral requirement. Let's look at another example. Suppose your great grandma is in the hospital and the doctor informs your family that she has one hour to live. Are you morally required to visit her out of familial duty? Let's stipulate that you love her a lot. If you live five minutes from the hospital and can easily arrive within the hour, it may be reasonable to say you are morally obligated to visit her. However, if you live halfway across the world in China and cannot possibly reach her in less than 12 hours by plane, it would be irrational to consider you morally blameworthy for failing to visit. Doing so is physically impossible. These examples seem to show that in order to be required to do something, you must have to have the ability to do it.",
      "Now let's examine Sophie's choice more closely to see whether moral dilemmas violate the \"ought implies can\" principle. For the sake of this argument, assume Sophie's choice does in fact create a moral dilemma. At first glance, it seems to violate the \"ought implies can\" principle. If Sophie decides to meet the obligation to not kill child A, then child B dies, and vice versa. This seems logically contradictory as it appears Sophie cannot fulfill her duty not to kill both children at once. However, upon closer inspection, one could argue that the situation may not actually contradict the \"ought implies can\" principle at all. Sophie is obligated not to kill child A, and she can choose not to kill child A. She is also obligated not to kill child B, and she can choose not to kill child B. Thus, she does have the ability to fulfill each obligation individually, which suggests that the \"ought implies can\" principle remains intact. This seems to show that the \"ought implies can\" principle alone is not sufficient to generate a logical contradiction in Sophie's choice scenario. Another principle must be included.",
      "What we notice from Sophie's choice is that Sophie cannot meet the obligation to not kill both children. The apparent violation of \"ought implies can\" arises if we claim Sophie ought not to kill A and ought not to kill B. What is being introduced is the agglomeration principle. If someone ought to do A, and that same person ought to do B, then it follows that the person ought to do both A and B together. From the agglomeration principle, if Sophie is obligated not to kill child A and is also obligated not to kill child B, then she is obligated not to kill both A and B together. However, choosing to save one necessarily means the other will die. If she refuses to choose which child to kill, both die and she fails to meet both of her obligations. Because Sophie cannot avoid killing at least one child, the \"ought implies can\" principle appears violated, creating a logical inconsistency.",
      "In order for moral dilemmas to be considered logically incoherent under this framework, one must accept both the principle of \"ought implies can\" and the agglomeration principle. Rejecting one or both of the principles I have outlined allows for the possibility of genuine moral dilemmas.",
      "Previously, I have outlined reasons to accept the \"ought implies can\" principle. However, some would argue that guilt or moral regret could lead one to reject this principle. They would argue that guilt indicates that a person did something morally wrong. One reason a person could feel they did something wrong is if they failed to meet an obligation. For example, Sophie might feel guilty for not saving both her children, even though it was impossible for her to do so. This feeling of guilt suggests that a person might have had a moral obligation, even though fulfilling it was impossible. If we treat guilt as reliable evidence of moral failure, we may be inclined to reject \"ought implies can.\" However, I would argue that guilt serves as an unreliable indicator due to its highly subjective nature. Consider the case of survivor's guilt: Let's say that by random chance, a person was the sole survivor of a natural disaster that wiped out the rest of the town. It is possible for the survivor to feel guilt despite not being responsible for the disaster and no obligation to save anyone. In this case, guilt does not stem from a failure to meet a moral obligation. Instead, it appears to be an emotional response. Therefore, it seems premature to reject \"ought implies can\" on the basis of accepting guilt as an indicator of moral failure.",
      "Now that I have given reasons to accept and not reject the \"ought implies can\" principle, I will move on to discuss the agglomeration principle. By itself, agglomeration does not necessarily generate logical inconsistencies. For example, in the case of preferences, agglomeration seems perfectly logical and unproblematic. A person might like strawberry ice cream on its own and also like stinky tofu separately. Yet, they may dislike the combination of strawberry ice cream and stinky tofu together. No logical inconsistencies arise from this preference. In fact, it seems perfectly reasonable as that combination sounds quite repulsive. This lack of contradiction may stem from the fact that preferences carry no binding force and need not be logically consistent. In the case of obligations, however, the agglomeration principle seems to yield a different result. I will argue that moral obligations must be aggregated. Consider the example of rescuing drowning children: let's say that you are a lifeguard and there are two children drowning in the ocean. You are capable of rescuing both children. Because of your role as a lifeguard, you morally ought to save X, and likewise, you morally ought to save Y. If one were to claim that agglomeration principle does not hold, they would have to say the lifeguard ought to save child X; the lifeguard ought to save child Y; but the lifeguard does not have an obligation to save both child X and Y together. Rejecting agglomeration would allow the lifeguard to morally justify saving one child and letting the other die. This seems intuitively wrong given that the lifeguard has the full ability to save both children. Additionally, such a conclusion undermines the binding nature of moral duties, making them seem arbitrary and inconsistent without the agglomeration principle.",
      "In this paper, I argued for the logical inconsistency of moral dilemmas and how they cannot exist if one were to accept the \"ought implies can\" principle and the agglomeration principle. I then argued for why accepting both of these principles is more plausible than rejecting one and accepting moral dilemmas. Finally, before concluding this paper, I want to address the question of what Sophie ought to choose and which actions are morally permissible in light of her difficult decision. I will offer a brief response to address this question looking through two lenses. First let's consider the consequentialist lens. If Sophie chooses to save A, then B dies; if she chooses to save B, then A dies. In both scenarios, exactly one person dies, and we have stipulated that there is no meaningful difference in consequences between the two choices. However, if Sophie refuses to decide, both A and B die, resulting in a worse outcome. Therefore from a consequentialist lens, it would seem to be equally permissible for Sophie to choose A or B. The only option that is not morally permissible is for Sophie to refuse to choose which child to kill. This framework hardly seems to yield a moral dilemma. Now let's consider a deontologist lens. A deontologist may argue that Sophie's true choice is to choose between violating her obligation to both children or violating her obligation to just one child. It would seem that violating both obligations is the all things considered duty that outweighs violating just one obligation. Although killing a child is prima facie wrong, refusing to make a choice amounts to a greater violation of her obligations under this framework. In both cases, it is possible that Sophie's choice is not viewed as a genuine moral dilemma at all. Because deontic logic is not violated in either of these scenarios, either of these two lenses seem more plausible than a theory where moral dilemmas exist and generate logical inconsistencies."
    ]
  }
];

export const artWorks = [
  {
    title: "Allergy",
    medium: "Acrylic on Canvas",
    src: "/images/art/allergy.jpg",
    orientation: "landscape" as const,
  },
  {
    title: "This American Life",
    medium: "Pastel on Paper",
    src: "/images/art/this-american-life.jpg",
    orientation: "landscape" as const,
  },
  {
    title: "King Jet",
    medium: "Acrylic on Canvas",
    src: "/images/art/i-see-all.jpg",
    orientation: "portrait" as const,
  },
  {
    title: "Fast Fashion v. The Runway",
    medium: "3D Fashion Design",
    src: "/images/art/fast-fashion-multiple-shots.jpg",
    orientation: "landscape" as const,
  },
  {
    title: "The Nightclub",
    medium: "Mixed Media on Sheet Music",
    src: "/images/art/nightclub.jpg",
    orientation: "landscape" as const,
  },
  {
    title: "Mr. Parker",
    medium: "Acrylic on Canvas",
    src: "/images/art/mr-parker.jpg",
    orientation: "portrait" as const,
  },
  {
    title: "The Homemaker",
    medium: "Conte on Paper",
    src: "/images/art/wine.jpg",
    orientation: "portrait" as const,
  },
  {
    title: "Bloom",
    medium: "Graphite on Paper",
    src: "/images/art/bloom.jpg",
    orientation: "portrait" as const,
  },
];

export const photographyWorks = [
  {
    title: "Old Montreal Musician",
    src: "/images/photography/old-montreal-musician.jpg",
    orientation: "landscape" as const,
  },
  {
    title: "Sunsets in North Macedonia",
    src: "/images/photography/sunsets-in-north-macedonia.jpg",
    orientation: "landscape" as const,
  },
  {
    title: "The Streets of Skopje",
    src: "/images/photography/the-streets-of-skopje.jpg",
    orientation: "landscape" as const,
  },
  {
    title: "The Winter Village",
    src: "/images/photography/the-winter-village.jpg",
    orientation: "landscape" as const,
  },
];
