export interface Thread {
  slug: string;
  symbol: string;
  title: string;
  description: string;
  prompt: string;
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  seoIntro: string;
  related: string[];
}

export const THREADS: Thread[] = [
  {
    slug: "shame",
    symbol: "~",
    title: "SHAME",
    description: "what you can't look at in yourself",
    prompt: "Say the thing that makes you want to disappear.",
    seoTitle: "Shame — Anonymous Confessions of What You Can't Say Out Loud",
    seoDescription: "Anonymous shame confessions. The things you can't look at in yourself. No account. No identity. Just the truth, finally said.",
    seoKeywords: ["shame confessions anonymous", "things I'm ashamed of", "anonymous shame thread", "confessing shame online", "shameful thoughts anonymous"],
    seoIntro: `Shame lives in the gap between who you are and who you believe you should be. It's not guilt — guilt is about what you did. Shame is about what you are, or what you've come to believe yourself to be. It speaks in absolute terms: not "I did something wrong" but "I am wrong." This is one of the hardest things to say out loud, which is exactly why it accumulates in the interior, growing louder the longer it goes unnamed.

The anonymous voices in this thread are saying the thing that shame told them never to say. No one here knows their name. The exposure is as low as it gets. For many of them, saying it here — even to a void — changed something about its weight.

If you have something shame has been keeping from you, this is where it goes.`,
    related: ["confession", "guilt", "secrets", "identity"],
  },
  {
    slug: "rage",
    symbol: "!",
    title: "RAGE",
    description: "the anger you swallowed",
    prompt: "Let it out. No one will flinch.",
    seoTitle: "Rage — Anonymous Confessions of Anger You Were Never Allowed to Feel",
    seoDescription: "Anonymous anger confessions. The rage you swallowed. Things you're furious about but can't say. No account. No filters. Let it out.",
    seoKeywords: ["rage confessions anonymous", "suppressed anger anonymous", "things I'm furious about", "anonymous anger thread", "anger I can't express"],
    seoIntro: `There's acceptable anger and there's rage. Acceptable anger is measured, proportionate, appropriate to its cause. Rage is something else — the accumulated weight of everything that was ever wrong, every injustice absorbed without response, every moment where you swallowed it and moved on because expressing it would have been too much, too ugly, too threatening to the version of yourself that other people can handle.

This thread is for the version that doesn't get expressed anywhere else. The anger with no appropriate venue. The fury at people you love, at situations you chose, at yourself. The accumulated grievance that never had a hearing.

No one here expects you to be calm. The void doesn't flinch, doesn't tell you to lower your voice, doesn't need you to justify the feeling before you're allowed to have it.`,
    related: ["shame", "grief", "confession", "failure"],
  },
  {
    slug: "fear",
    symbol: "?",
    title: "FEAR",
    description: "what keeps you up at 3am",
    prompt: "Name the thing in the dark.",
    seoTitle: "Fear — Anonymous Confessions of What Keeps You Up at 3am",
    seoDescription: "Anonymous fear confessions. The fears you can't say in daylight. What keeps you up at night. No account. No judgment. Just the fear, named.",
    seoKeywords: ["anonymous fear confessions", "things people are afraid of", "what keeps you up at night", "3am fears anonymous", "fears I can't admit"],
    seoIntro: `The fears people admit to — spiders, heights, public speaking — are not the ones that keep them up at night. The real fears are harder to name. The fear that your choices were wrong and there is no version of things that recovers from them. The fear that the people who love you would feel differently if they knew you completely. The fear of mortality in its full weight, not the manageable version. The fear that something is fundamentally different about you in a way that can't be fixed.

These are not fears that go into conversations. They live in the interior, visited at 3am when the daytime management goes offline.

This thread is where they get named. The act of naming a fear — even anonymously, even to a void — changes something about its relationship to you. Unnamed fears have a particular kind of power. This is where that power gets interrupted.`,
    related: ["shame", "doubt", "secrets", "solitude"],
  },
  {
    slug: "grief",
    symbol: "×",
    title: "GRIEF",
    description: "what you're still mourning",
    prompt: "Speak the name of what you've lost.",
    seoTitle: "Grief — Anonymous Confessions of Loss and What It Actually Does to You",
    seoDescription: "Anonymous grief confessions. What loss really feels like. The private version of grief that doesn't follow the expected timeline. No account.",
    seoKeywords: ["grief confessions anonymous", "anonymous grief thread", "dealing with loss thoughts", "what grief really feels like", "grieving anonymously"],
    seoIntro: `Grief has an official timeline. There's a period of visible mourning, then a return to function. What that timeline doesn't account for: the private experience that runs alongside it. The grief that resurfaces years later in specific songs, in ordinary Tuesday evenings, in a smell that shouldn't mean anything but does. It doesn't move through stages the way the diagrams suggest, and it doesn't end at the expected point.

The pressure to be "doing better" is one of the loneliest parts of grieving. The performance of recovery — for the people around you who need you to be okay — happens while the internal reality continues without announcement.

This thread holds the private account. The grief that couldn't be shown without changing how people see you. The loss that doesn't have a name others would recognize. All of it — said here, to the void, without a timeline.`,
    related: ["longing", "love", "loss", "solitude"],
  },
  {
    slug: "confession",
    symbol: "//",
    title: "CONFESSION",
    description: "what you did and haven't forgiven",
    prompt: "No absolution. Just the truth.",
    seoTitle: "Anonymous Confessions — Say the True Thing, Finally",
    seoDescription: "Anonymous confession thread. Say the thing you did, the thing you feel, the thing you've never told anyone. No account. No absolution. Just the truth.",
    seoKeywords: ["anonymous confession thread", "confess something online", "online confession no account", "tell a secret anonymously", "things I've done anonymous"],
    seoIntro: `A confession is the act of saying something out loud that has only existed inside. Not for absolution — there's none offered here. Not for forgiveness — the void doesn't grant it. Because the interior is sometimes too small to hold everything by itself. Because the thing needs to exist somewhere outside your own head, in language, finally acknowledged.

This is a confessional without a priest. Without consequences. Without anyone who knows your name. The confession you write here will not change your relationships, your reputation, or your life. It will simply exist — named, said, released into a void that receives everything without modification.

Everything posted in this thread was said by someone who needed to say the true thing, just once, to somewhere that wasn't their own skull.`,
    related: ["shame", "secrets", "guilt", "rage"],
  },
  {
    slug: "longing",
    symbol: "…",
    title: "LONGING",
    description: "what you miss but can't name",
    prompt: "Reach for the thing that isn't there.",
    seoTitle: "Longing — Anonymous Confessions of Missing What Can't Be Recovered",
    seoDescription: "Anonymous longing confessions. Missing someone, something, a version of yourself. The ache that doesn't go away. No account. No filters.",
    seoKeywords: ["longing confessions anonymous", "missing someone anonymous", "aching for what's gone", "anonymous thoughts about longing", "what I miss anonymous"],
    seoIntro: `Longing is the specific ache of knowing that time moves in one direction. The person, the place, the version of yourself that existed before something changed — these are not recoverable, and some part of you has not accepted this. The acceptance is supposed to come eventually. For many people it doesn't, or it comes slowly, and the ache persists in ways that are hard to justify.

Memory edits in favor of what was lost. The thing you're reaching for may not have been quite as it appears in the remembering — but the reaching itself is real, and the ache is exact.

This thread holds the reach. The honest account of what you're still missing, without the part where you've made peace with it. No requirement to have moved on. Just the longing, said.`,
    related: ["grief", "love", "solitude", "the-past"],
  },
  {
    slug: "desire",
    symbol: "+",
    title: "DESIRE",
    description: "what you want but won't admit",
    prompt: "Say what you want without apology.",
    seoTitle: "Desire — Anonymous Confessions of What You Want But Won't Admit",
    seoDescription: "Anonymous desire confessions. What you really want. The things you won't say in daylight. No account. No judgment. Say it without apology.",
    seoKeywords: ["desire confessions anonymous", "what I really want anonymous", "secret desires anonymous", "things I want but can't say", "anonymous wanting"],
    seoIntro: `Desire is one of the most edited things in most people's interior life. What you want collides with what you're supposed to want — the life you've constructed, the person you've agreed to be, the version of your future that makes sense to the people around you. The unedited version of your desire is often more inconvenient, more specific, less acceptable than what gets expressed.

This thread is for the unedited version. No context that could identify you. No one who knows what you've agreed to want. Just the thing you actually want, said plainly, without apology or justification.

The void doesn't judge desire. It holds it the same way it holds everything — without reaction, without requiring you to be different, without using it against you.`,
    related: ["shame", "love", "identity", "secrets"],
  },
  {
    slug: "failure",
    symbol: "–",
    title: "FAILURE",
    description: "the thing you pretend didn't happen",
    prompt: "Stop pretending. Say it once.",
    seoTitle: "Failure — Anonymous Confessions of the Thing You Pretend Didn't Happen",
    seoDescription: "Anonymous failure confessions. Things that didn't work. The version before the lesson. The honest account of what it's like inside failure.",
    seoKeywords: ["failure confessions anonymous", "honest about failure", "failed at something anonymous", "anonymous thoughts about failure", "things I failed at"],
    seoIntro: `Failure has a social narrative: it's a teacher, a necessary precursor to success, the thing that makes the eventual achievement meaningful. This is true, eventually, for some failures. What it doesn't capture: the experience of being inside failure before you know if there's a lesson, before you know if you'll recover, when it's just the plain fact of something not working — often with people watching.

The version of yourself that failed is not comfortable to look at directly. The honest account of what happened — the real reasons, the real cost, what it revealed about you that you hadn't wanted to know — is what most people avoid examining.

This thread holds the examination. The honest version, before the narrative, without the part where it becomes useful.`,
    related: ["shame", "doubt", "regret", "identity"],
  },
  {
    slug: "doubt",
    symbol: "≈",
    title: "DOUBT",
    description: "the beliefs you've started to question",
    prompt: "What have you stopped believing in?",
    seoTitle: "Doubt — Anonymous Confessions of Beliefs You've Started to Question",
    seoDescription: "Anonymous doubt confessions. Questioning what you believed in. Losing certainty. The honest account of what you've stopped being sure about.",
    seoKeywords: ["doubt confessions anonymous", "questioning beliefs anonymous", "losing faith in something", "what I stopped believing", "anonymous doubt thread"],
    seoIntro: `Doubt arrives quietly. It's rarely the dramatic reversal — more often it's the slow erosion of something you were certain about. A relationship, a career, a belief system, a conviction about yourself or about the world. You notice the certainty has gaps. You notice you're not as sure as you used to be.

The social pressure to have clear convictions — to know what you believe, to be the person you've been, to not be someone who changed their mind — makes doubt difficult to admit. Admitting doubt feels like admitting weakness, or betrayal of your former self, or confusion that you're not supposed to have reached yet.

This thread is where the uncertainty gets to exist without being resolved. The honest account of what you've stopped being sure about, without the part where you arrive at a new certainty.`,
    related: ["identity", "fear", "confession", "failure"],
  },
  {
    slug: "identity",
    symbol: "◌",
    title: "IDENTITY",
    description: "who you are when no one's watching",
    prompt: "Who are you with the mask off?",
    seoTitle: "Identity — Anonymous Confessions of Who You Really Are",
    seoDescription: "Anonymous identity confessions. Who you are when no one's watching. The gap between the presented self and the real one. No account required.",
    seoKeywords: ["identity confessions anonymous", "who am I really anonymous", "true self anonymous", "questioning identity thoughts", "anonymous self-reflection"],
    seoIntro: `The presented self and the interior self diverge over time. You become practiced at the version that moves through the world — consistent, legible, predictable in the ways that relationships and institutions require. The version underneath accumulates contradictions: desires that don't fit the narrative, changes that haven't been officially registered anywhere, parts of yourself that you've kept separate from the context that knows your name.

By the time most people notice the gap, it has been growing for years.

This thread is for the interior version — the one that exists before the presentation begins. No audience to maintain a consistent self for. No obligation to be the person you've told people you are. Just the honest account of who you are when no one is watching.`,
    related: ["shame", "doubt", "desire", "childhood"],
  },
  {
    slug: "love",
    symbol: "∞",
    title: "LOVE",
    description: "what love actually did to you",
    prompt: "The truth about love. Not the version you tell.",
    seoTitle: "Love — Anonymous Confessions of What Love Actually Did to You",
    seoDescription: "Anonymous love confessions. The real version of what love felt like, what it cost, what it changed. No account. No performance. Just the truth.",
    seoKeywords: ["anonymous love confessions", "what love really feels like", "honest thoughts about love", "love confession anonymous", "love hurt me anonymous"],
    seoIntro: `Not the version of love that gets talked about. The actual experience — what it cost, what it changed, what it revealed about you that you hadn't known before. The love that didn't work out the way it was supposed to. The love that changed you in ways you're still mapping, years later. The love you have for someone you've never said it to. The love that turned into something harder to name.

Love as it's usually discussed has been smoothed for public consumption. The version that fits into narratives, that concludes, that teaches a lesson you can summarize. The version here is different. The one that doesn't conclude. The one that's still ongoing even when it has no place to go.

This is where that version gets to be said.`,
    related: ["longing", "grief", "desire", "heartbreak"],
  },
  {
    slug: "solitude",
    symbol: "○",
    title: "SOLITUDE",
    description: "what it's like to be truly alone",
    prompt: "Describe your silence.",
    seoTitle: "Solitude — Anonymous Confessions of What Being Truly Alone Is Like",
    seoDescription: "Anonymous solitude confessions. What it's really like to be alone. The thoughts that arrive in silence. No account. No performance of fine.",
    seoKeywords: ["solitude confessions anonymous", "being alone thoughts anonymous", "what loneliness really is", "anonymous thoughts about solitude", "alone with my thoughts"],
    seoIntro: `Solitude is different from loneliness, though they can share the same space. Loneliness is the pain of unwanted aloneness. Solitude can be chosen — but even chosen solitude has a texture, a quality of interior experience, that is rarely described honestly.

What's it like to be truly alone with your own mind for extended periods? The thoughts that arrive when there's no one to perform for. The version of yourself that surfaces when the social context is entirely removed. The things you think about, the way time moves differently, the degree to which the interior is louder or quieter than you expected.

This thread is for that description. The honest account of what actually happens in the silence — not the version that makes solitude sound like meditation or productivity. The actual experience.`,
    related: ["longing", "fear", "identity", "grief"],
  },
  {
    slug: "body",
    symbol: "□",
    title: "BODY",
    description: "what you think of the skin you're in",
    prompt: "What does your body hold that your mouth won't say?",
    seoTitle: "Body — Anonymous Confessions of Living in This Particular Skin",
    seoDescription: "Anonymous body confessions. What you really think about your body. The private version of body image. No account. No performance required.",
    seoKeywords: ["body image confessions anonymous", "anonymous thoughts about my body", "body image anonymous", "honest body confessions", "relationship with body anonymous"],
    seoIntro: `The relationship most people have with their body is one of the most edited parts of their interior life. You curate what you say about it — to the world, to friends, to yourself. You perform a relationship with your physical self: either the appropriate dissatisfaction that signals self-awareness, or the cultivated acceptance that signals having done the work. Neither may be the actual experience.

The actual experience is private. What you think about your appearance when no one else is in the assessment. How aging is registering in ways you haven't told anyone. The specific ways you inhabit this body — the things it holds, the things it won't let go of, the ways it surprises you or disappoints you or exceeds what you expected.

This thread is the private version.`,
    related: ["shame", "identity", "desire", "childhood"],
  },
  {
    slug: "childhood",
    symbol: "◁",
    title: "CHILDHOOD",
    description: "what you carry from the beginning",
    prompt: "What did they give you that you never asked for?",
    seoTitle: "Childhood — Anonymous Confessions of What You Still Carry From the Beginning",
    seoDescription: "Anonymous childhood confessions. What your upbringing gave you that you didn't ask for. What you carry. No account. No need to be fair to anyone.",
    seoKeywords: ["childhood confessions anonymous", "what I carry from childhood", "anonymous childhood memories", "things parents gave me", "childhood shaped me anonymous"],
    seoIntro: `Childhood is the original context — the one that set the parameters for everything that followed. The patterns absorbed before you had language to name them. The version of love you learned, the version of safety, the version of what you were worth — all of it arrived before you could evaluate or consent to it.

The examination of this is slow and often disorienting because the patterns feel like the way things are, not the way things were. The critical parent's voice that became your inner critic. The instinct toward certain dynamics in relationships. The things that felt normal that you later realized were not.

This thread holds the honest account — what was given and what was taken, without having to protect anyone's feelings, without having to balance it with the good things, without the caveat that they did their best.`,
    related: ["identity", "shame", "grief", "secrets"],
  },
  {
    slug: "secrets",
    symbol: "⊘",
    title: "SECRETS",
    description: "the thing only you know",
    prompt: "Tell the void. It won't remember.",
    seoTitle: "Secrets — Anonymous Confessions of the Thing Only You Know",
    seoDescription: "Tell a secret anonymously. The thing only you know. Things I've never told anyone. No account. The void won't remember.",
    seoKeywords: ["secret confessions anonymous", "things I've never told anyone", "anonymous secret thread", "tell a secret online", "confess a secret anonymously"],
    seoIntro: `Every person carries at least one thing they have never told anyone. The thing that lives entirely inside — not necessarily because it's terrible, but because it's too specific, too revealing, too likely to change the way someone would see you if they knew. Some secrets are large. Many are not. What they share is the weight of maintenance: you have to hold the shape of the version you've presented to the world while keeping the other version separate.

Telling a secret — even here, even anonymously, even to a void that won't remember — does something to its weight. The interior becomes slightly less small. The thing that was only inside now exists, once, somewhere else.

This thread is that somewhere else. No names. No consequences. Just the thing, finally out of your head.`,
    related: ["confession", "shame", "desire", "fear"],
  },
];

export function getThread(slug: string): Thread | undefined {
  return THREADS.find((t) => t.slug === slug);
}
