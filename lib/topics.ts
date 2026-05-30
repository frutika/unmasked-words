export interface Topic {
  slug: string;
  title: string;
  description: string;
  shortIntro: string;
  intro: string;
  keywords: string[];
  related: string[];
}

export type SuperTopicSlug = "LOVE" | "MIND" | "SELF" | "EXISTENCE";

export interface SuperTopic {
  slug: SuperTopicSlug;
  topics: string[];
}

export const SUPER_TOPICS: SuperTopic[] = [
  { slug: "LOVE", topics: ["love", "heartbreak", "longing", "marriage", "divorce", "cheating"] },
  { slug: "MIND", topics: ["anxiety", "overthinking", "depression", "burnout", "trauma"] },
  { slug: "SELF", topics: ["identity", "purpose", "meaning", "self-worth", "confidence"] },
  { slug: "EXISTENCE", topics: ["death", "mortality", "freedom", "aging", "the-past"] },
];

export const TOPICS: Topic[] = [
  // ── FEAR CLUSTER ──────────────────────────────────────────────────────────
  {
    slug: "fear",
    title: "Fear",
    description: "the things that keep you up at night",
    shortIntro: "The thing underneath — not spiders or heights.\nThe fear that runs everything else.\nThe one that shows up in quiet moments with full knowledge of what it knows.",
    intro: `Fear has two versions. The one you'll admit to — spiders, heights, public speaking — and the real one. The fear underneath, the one that surfaces in quiet moments and won't let you sleep. The fear that you've made irreversible mistakes. That the people you love see through you. That you're fundamentally different from everyone around you in a way that can't be fixed.

This is where the real version gets named. Anonymous thoughts about fear posted here are not performance. No one is watching. No one will remember your name. Just the fear, spoken once into a void that holds it without judgment.

The posts below were written by people who were afraid to say what they were afraid of. Until they did.`,
    keywords: ["anonymous fear thoughts", "scared anonymous", "name your fear online"],
    related: ["anxiety", "vulnerability", "shame", "overthinking", "death"],
  },
  {
    slug: "anxiety",
    title: "Anxiety",
    description: "the noise that doesn't stop",
    shortIntro: "The background process that never closes.\nThe catastrophe rehearsal with no evidence it's needed.\nThe noise that gets loudest when everything is actually fine.",
    intro: `Anxiety is not just nervousness. It's the background process that never closes. The thought that loops. The catastrophe rehearsal that plays on repeat even when nothing is wrong — especially when nothing is wrong.

People don't talk honestly about anxiety because describing it accurately sounds irrational. You can't explain to someone who doesn't experience it why a quiet Sunday afternoon is sometimes the hardest.

Here, no explanation is required. Anonymous thoughts about anxiety posted on UnmaskedWords don't need to make sense to anyone else. They just need to be the true thing — the exact texture of what it's like in your head when the noise won't stop.

The posts below are from people who know exactly what you mean.`,
    keywords: ["anxiety thoughts anonymous", "anxiety confessions", "share anxiety anonymously"],
    related: ["fear", "overthinking", "insomnia", "burnout", "perfectionism"],
  },
  {
    slug: "overthinking",
    title: "Overthinking",
    description: "the mind that won't let it go",
    shortIntro: "The conversation replayed forty times.\nThe seventeen versions of a decision that hasn't happened yet.\nThe mind that knows better and can't stop anyway.",
    intro: `You've replayed that conversation forty times. You've run seventeen versions of a decision that hasn't happened yet. You've imagined the worst outcomes of something that will probably be fine. You know this. It doesn't help.

Overthinking doesn't respond to logic because it isn't logical — it's a pattern, a habit of mind, a way of trying to control outcomes by pre-experiencing them.

UnmaskedWords is the place where overthinking thoughts get to exist outside your head for once. Anonymous. No context needed. No one telling you to "just stop worrying." Just the thought, placed in a void that doesn't echo it back louder.

The posts below are from minds that also couldn't let it go.`,
    keywords: ["overthinking anonymous", "can't stop thinking", "intrusive thoughts anonymous"],
    related: ["anxiety", "insomnia", "perfectionism", "self-doubt", "fear"],
  },
  {
    slug: "insomnia",
    title: "Insomnia",
    description: "the hours when the mind speaks loudest",
    shortIntro: "3am, when the edited version of yourself goes offline.\nThe things managed all day, arriving all at once.\nThe unedited truth with nowhere to go but here.",
    intro: `At 3am, the editing stops. The curated version of yourself that moves through the day — confident, functional, fine — goes offline. What remains is the raw version. The version that knows exactly what's wrong and won't pretend otherwise.

Insomnia is not just being awake. It's being awake with the unedited truth of your life as company. The things you've managed not to think about since morning arrive all at once, fully formed.

UnmaskedWords is where those 3am thoughts go when they need to exist somewhere outside your skull. Anonymous, untraceable, real. Post the thought that's keeping you awake. The void receives it. Morning will come either way.`,
    keywords: ["3am thoughts anonymous", "can't sleep thoughts", "late night thoughts confessions"],
    related: ["overthinking", "anxiety", "loneliness", "fear", "depression"],
  },
  {
    slug: "vulnerability",
    title: "Vulnerability",
    description: "being seen when it terrifies you",
    shortIntro: "The thing you know how to say.\nThe problem is what being seen costs you.\nThe price most situations don't actually warrant paying.",
    intro: `You know what you want to say. You've known for a while. The problem isn't the words — it's the exposure. Saying the true thing to someone who knows your name means giving them something that could be used against you. Means being seen in a way that can't be taken back.

Vulnerability requires trust that most situations don't actually warrant. The internet, especially, offers no safe container for it. Until here.

Anonymous thoughts about vulnerability posted on UnmaskedWords exist without the exposure. The thing gets said. The relief is real. No one knows it was you. It's the closest thing to speaking the truth out loud that most people ever manage to get.`,
    keywords: ["vulnerability confessions anonymous", "afraid to be seen", "speaking truth anonymously"],
    related: ["trust", "shame", "fear", "self-worth", "secrets"],
  },

  // ── LOVE CLUSTER ──────────────────────────────────────────────────────────
  {
    slug: "love",
    title: "Love",
    description: "what love actually did to you",
    shortIntro: "Not the version you talk about — the actual thing.\nWhat it felt like. What it changed.\nWhat it cost, in ways you're still mapping.",
    intro: `Not the version of love you talk about. The actual thing — what it felt like, what it cost you, what it changed. The love that didn't work out the way it was supposed to. The love that changed you in ways you're still mapping. The love you have for someone you've never said it to. The love that turned into something harder to name.

Love as it's usually discussed has been polished for public consumption. The version here is different. Anonymous thoughts about love posted on UnmaskedWords are the ones that didn't make it into the story you tell about yourself.

The true version. Without the framing that makes it easier for other people to hear.`,
    keywords: ["anonymous love thoughts", "confessions about love", "what love really feels like"],
    related: ["heartbreak", "longing", "unrequited-love", "marriage", "desire"],
  },
  {
    slug: "heartbreak",
    title: "Heartbreak",
    description: "what you're still carrying",
    shortIntro: "The private timeline that follows no one else's expectations.\nThe songs, the smells, the random Tuesday you thought you were over it.\nThe grief that reads nobody's calendar but its own.",
    intro: `Heartbreak has a public timeline. You're allowed a certain amount of visible grief, a certain amount of time, a certain number of conversations about it before people expect you to be fine. The problem is that heartbreak doesn't read those expectations.

The private version goes on longer. It resurfaces in specific songs, in the way a room smells, in a random Tuesday evening when you thought you were over it. It's not linear. It doesn't end when you say it ended.

This is where the private version goes. Anonymous thoughts about heartbreak with no audience to perform recovery for. Just the honest account of what it's actually like to carry something this heavy for this long.`,
    keywords: ["heartbreak anonymous", "confessions about heartbreak", "grieving a relationship"],
    related: ["love", "grief", "regret", "loneliness", "longing"],
  },
  {
    slug: "longing",
    title: "Longing",
    description: "reaching for what isn't there",
    shortIntro: "Not sadness — something quieter.\nReaching for a person, a place, a version of yourself that isn't there anymore.\nThe ache that doesn't need a reason to be real.",
    intro: `Longing is different from sadness. Sadness is about something that happened. Longing is about something that can't be recovered — the past version of a relationship, a place you can't return to, a person who doesn't exist in your life the same way anymore, a version of yourself you had before something changed.

It doesn't fit neatly into grief because nothing was necessarily lost to an event. It's the quiet ache of reaching for something that simply isn't there.

Anonymous thoughts about longing posted here don't need to be explained or justified. The ache is real whether or not it makes narrative sense. This is where it goes.`,
    keywords: ["longing anonymous", "missing something anonymous", "ache for the past"],
    related: ["love", "nostalgia", "grief", "the-past", "unrequited-love"],
  },
  {
    slug: "unrequited-love",
    title: "Unrequited Love",
    description: "loving someone who doesn't love you back",
    shortIntro: "Loving someone who doesn't know, or doesn't feel it back.\nThe grief of something that was entirely on your side.\nMourning a love that never had two people in it.",
    intro: `Unrequited love doesn't end when you stop hoping. It persists in odd ways — in the specific way you feel when their name comes up, in the awareness that the feeling was entirely on your side, in the strange grief of mourning something that never actually existed.

There's very little acceptable space to talk about this. You can't say you're grieving something that was never real. You can't explain the weight of a feeling that no one else witnessed.

Here, you can. Anonymous thoughts about unrequited love don't require the other person's participation or anyone else's understanding. The feeling was real. It happened. This is where it gets to be said.`,
    keywords: ["unrequited love confessions", "loving someone who doesn't love you", "one-sided love anonymous"],
    related: ["longing", "rejection", "heartbreak", "shame", "love"],
  },
  {
    slug: "marriage",
    title: "Marriage",
    description: "the private truth about the institution",
    shortIntro: "The partnership people see and the private reality inside it.\nThe loneliness that exists inside commitment.\nThe ways you've changed that haven't been officially registered anywhere.",
    intro: `Marriage has a public face and a private reality. The public face is what you bring to dinner parties and social media — the partnership, the shared life, the love. The private reality is more complicated. The loneliness that can exist inside a committed relationship. The ways you've changed that you haven't told your partner. The version of yourself that only comes out when they're not watching.

Anonymous thoughts about marriage posted here are the ones that don't get said. Not because they're not real — because saying them out loud, to people who know you, changes things in ways you're not ready for.

This is where the private truth goes.`,
    keywords: ["marriage confessions anonymous", "honest thoughts about marriage", "lonely in marriage"],
    related: ["love", "family", "trust", "loneliness", "divorce"],
  },
  {
    slug: "divorce",
    title: "Divorce",
    description: "the grief that doesn't have a name",
    shortIntro: "The grief that comes alongside relief.\nA life restructured without a script for this version.\nThe specific strangeness of a future that looked different a year ago.",
    intro: `Divorce is treated as an ending with clear social scripts — the villain, the victim, the recovery arc. The reality is messier. The grief doesn't announce itself as grief. It arrives as relief and loss simultaneously, as the strangeness of a life restructured, as the specific loneliness of a changed future.

There's pressure to have a narrative about it — to know whether it was the right decision, to be either devastated or liberated. Most people are both and neither. Most people don't have a clean story.

Anonymous thoughts about divorce posted here don't require a clean story. Just the true account of what it's actually like.`,
    keywords: ["divorce confessions anonymous", "honest thoughts about divorce", "grieving a marriage"],
    related: ["marriage", "grief", "failure", "loneliness", "change"],
  },
  {
    slug: "cheating",
    title: "Cheating",
    description: "the thing you did or the thing done to you",
    shortIntro: "The thing done, or the thing done to you.\nThe moral categories that don't fit the actual complexity.\nThe weight that stays regardless of which side you were on.",
    intro: `Cheating sits at the intersection of shame, guilt, and the impossible complexity of real relationships. Whether you did it or it was done to you, the experience rarely fits the clean moral categories assigned to it. The person who cheated is not always the monster. The person who was cheated on is not always the victim in a simple sense. Reality is more ambiguous and more painful than the narrative.

No one's name is attached to the thoughts posted here. No judgment from people who know your situation, your relationship, your character. Just the honest account of what happened and what it's like to carry it.`,
    keywords: ["cheating confessions anonymous", "anonymous affair confessions", "infidelity thoughts"],
    related: ["trust", "betrayal", "shame", "guilt", "regret"],
  },

  // ── REGRET CLUSTER ────────────────────────────────────────────────────────
  {
    slug: "regret",
    title: "Regret",
    description: "the roads not taken and the ones you wish you hadn't",
    shortIntro: "The mistakes that stayed.\nThe roads not taken.\nThe moments people replay long after everyone else forgot.",
    intro: `Regret is the most private form of grief. You can't really mourn a decision out loud — the social response is always the same: "everything happens for a reason," "you couldn't have known," "move forward." None of it touches the actual thing.

The actual thing is the specific knowledge of what you chose and what it cost. The version of your life that didn't happen. The moment you can pinpoint where something changed.

Anonymous thoughts about regret posted here don't need the social comfort layer. They don't need to arrive at acceptance or meaning. They're allowed to just be the honest account of what you chose, what you lost, and what you're still sitting with.`,
    keywords: ["regret anonymous", "confessions about regret", "things I regret anonymously"],
    related: ["mistakes", "guilt", "forgiveness", "the-past", "loss"],
  },
  {
    slug: "mistakes",
    title: "Mistakes",
    description: "what you did and can't take back",
    shortIntro: "What you did when no one was watching, or when everyone was.\nThe decisions that revealed something about yourself you didn't want to see.\nThe things that can't be taken back.",
    intro: `The mistakes that stay with you are the ones that showed you something about yourself you didn't want to know. The decision made for the wrong reason. The thing said in a moment that revealed what was underneath. The choice that seemed small and turned out not to be.

These are hard to say out loud because saying them requires admitting the full version — not the edited one where you were under pressure, or didn't know better, or were going through something. The unedited version where you just did the thing.

Anonymous thoughts about mistakes posted here can be the full version. No one here knows your name. The void doesn't edit for you.`,
    keywords: ["mistakes confessions anonymous", "things I did wrong anonymous", "regret and mistakes"],
    related: ["regret", "failure", "shame", "growth", "guilt"],
  },
  {
    slug: "guilt",
    title: "Guilt",
    description: "carrying what you did",
    shortIntro: "The specific date. The specific person it concerns.\nThe difference between what you did and who you are.\nThe weight that doesn't dissolve on its own.",
    intro: `Guilt is different from shame. Shame is about who you are. Guilt is about what you did. The distinction matters, but it doesn't make guilt easier to carry. If anything, it's harder — because guilt is specific. It has a date, a situation, a person it concerns.

You can manage guilt in private indefinitely. People do it for years. What you can't do easily is say the true version of what happened — the one where you made the choice you made for the reasons you actually made it.

This is where that version goes. Anonymous thoughts about guilt posted here are the ones that couldn't be said anywhere else.`,
    keywords: ["guilt confessions anonymous", "carrying guilt anonymous", "things I feel guilty about"],
    related: ["regret", "shame", "forgiveness", "confession", "mistakes"],
  },
  {
    slug: "forgiveness",
    title: "Forgiveness",
    description: "the thing that won't come, or came too easily",
    shortIntro: "The thing that's supposed to come — and sometimes doesn't.\nThe timeline imposed from outside that has nothing to do with actual healing.\nWhere you actually are, not where you're supposed to be.",
    intro: `Forgiveness is demanded on a timeline that has nothing to do with actual healing. You're expected to arrive at it — for yourself, for the person who hurt you — as though it's a destination with a clear map.

The reality: sometimes forgiveness doesn't come. Sometimes what you feel instead is anger, or grief, or a complicated mix that doesn't have a name. Sometimes forgiving someone doesn't make the damage they did go away. Sometimes forgiving yourself is the harder project.

Anonymous thoughts about forgiveness posted here don't need to have arrived anywhere. The honest account of where you actually are is enough. The void doesn't need you to be further along than you are.`,
    keywords: ["forgiveness thoughts anonymous", "can't forgive anonymous", "struggling to forgive"],
    related: ["guilt", "betrayal", "healing", "anger", "regret"],
  },

  // ── LONELINESS CLUSTER ────────────────────────────────────────────────────
  {
    slug: "loneliness",
    title: "Loneliness",
    description: "alone in every room",
    shortIntro: "Not just being alone — being unseen inside a full life.\nConnection that moves through expected channels without arriving anywhere real.\nIn a room full of people, entirely separate.",
    intro: `The loneliness that's hardest to talk about is not the obvious kind — living alone, having no one to call. It's the kind that exists inside a full life. The loneliness of being in a relationship and feeling unseen. Of having friends and not being able to say the real thing. Of being in a room full of people and feeling entirely separate.

This loneliness doesn't have an obvious solution. You can't solve it by adding people. Something deeper is missing: the specific experience of being known.

Anonymous thoughts about loneliness posted here exist without the performance of fine. The true account, without the face that tells the world you're managing.`,
    keywords: ["loneliness confessions anonymous", "lonely thoughts", "feeling alone anonymous"],
    related: ["isolation", "belonging", "depression", "connection", "insomnia"],
  },
  {
    slug: "isolation",
    title: "Isolation",
    description: "what separation does to you",
    shortIntro: "The interior that gets louder when contact disappears.\nThe slow rewiring of what social situations cost you.\nWhat separation actually does, from the inside.",
    intro: `Isolation is not just physical. You can be isolated in the middle of a city, in a house full of people, in a relationship. It's the experience of being cut off from real contact — the kind where you're actually seen, not just functionally present.

Prolonged isolation does things to the mind that are hard to describe to someone who hasn't experienced them. The way the interior becomes louder. The way social situations start to require more energy. The way you lose the ability to gauge what's normal.

Anonymous thoughts about isolation posted here are from people who know what it does. This is where they put it down for a moment.`,
    keywords: ["isolation thoughts anonymous", "feeling isolated anonymous", "cut off from people"],
    related: ["loneliness", "depression", "belonging", "connection", "insomnia"],
  },
  {
    slug: "belonging",
    title: "Belonging",
    description: "never quite fitting in anywhere",
    shortIntro: "The feeling that was supposed to go away when you grew up.\nThe performance of fitting in while feeling entirely adjacent.\nNever quite — in any group, any place, any version of this.",
    intro: `The feeling of not belonging is supposed to go away when you're an adult. You find your people, your place, your community. Except for many people, it doesn't. The feeling of being slightly outside, slightly adjacent, slightly not-quite — it persists across different contexts, different groups, different cities.

The worst version is performing belonging. Going through the motions of connection while feeling entirely separate inside it. No one knows. You've gotten very good at the surface.

Anonymous thoughts about belonging posted here are from people who dropped the performance, just once, and said the true thing. This is what it sounds like.`,
    keywords: ["not belonging anonymous", "never fit in confessions", "outsider feelings anonymous"],
    related: ["identity", "loneliness", "rejection", "connection", "isolation"],
  },
  {
    slug: "connection",
    title: "Connection",
    description: "what you're looking for and can't quite find",
    shortIntro: "The thing you keep almost finding.\nThe full social life that still feels like operating behind glass.\nThe specific person you are past the functional surface, still largely unwitnessed.",
    intro: `Real connection — the kind where someone actually knows you — is rarer than it should be. You can have a full social life and still feel like you're operating behind glass. You can have deep relationships and still feel like the specific, inconvenient truth of your interior is unshared.

Most people settle for functional connection: conversations that move through the expected channels without ever arriving somewhere real. It works for most purposes. It doesn't satisfy the thing underneath.

Anonymous thoughts about connection posted here are from people who are honest about what they're looking for and how rarely they find it. No performance. Just the honest account.`,
    keywords: ["human connection anonymous", "craving connection thoughts", "feeling disconnected"],
    related: ["belonging", "loneliness", "friendship", "love", "vulnerability"],
  },

  // ── ANGER CLUSTER ─────────────────────────────────────────────────────────
  {
    slug: "anger",
    title: "Anger",
    description: "the anger you weren't allowed to feel",
    shortIntro: "The anger you were allowed to have — and then the real kind.\nThe one accumulating for years across small injustices.\nThe one directed at people you're supposed to love.",
    intro: `There's the anger you're allowed to have — proportionate, justified, expressed and resolved. Then there's the anger underneath: the kind that's been accumulating for years across small injustices, the kind directed at people you're supposed to love, the kind with no clear target but enormous mass.

This anger doesn't get expressed. You manage it, contain it, redirect it. The expression of it would be too much, too ugly, too revealing.

Anonymous thoughts about anger posted here are not polished. They're not the reasonable version. They're the actual version — the one that never gets said where anyone can hear it.`,
    keywords: ["anger confessions anonymous", "rage thoughts anonymous", "things I'm angry about"],
    related: ["frustration", "resentment", "forgiveness", "family", "betrayal"],
  },
  {
    slug: "frustration",
    title: "Frustration",
    description: "the slow accumulation of almost",
    shortIntro: "The slow accumulation of almost.\nEach small failure adding weight to the ones before it.\nNot a problem — a pattern.",
    intro: `Frustration is the emotion of things not working despite effort. It compounds. Each small failure, each almost, each thing that should be simple but isn't, adds weight to the ones before it. After a while it's not about any specific thing — it's about the pattern.

Frustration is hard to talk about because it sounds like complaining without specific cause. People expect either a solvable problem or genuine tragedy. Frustration is the large category in between — too real to dismiss, not dramatic enough to earn full acknowledgment.

Anonymous thoughts about frustration posted here don't need to arrive at a solution or a lesson. They're allowed to just be the honest account of the accumulation.`,
    keywords: ["frustration thoughts anonymous", "things that frustrate me anonymous", "fed up anonymous"],
    related: ["anger", "failure", "work", "perfectionism", "disappointment"],
  },
  {
    slug: "resentment",
    title: "Resentment",
    description: "the anger that didn't get to leave",
    shortIntro: "Anger that had nowhere to go.\nWhat stayed when the response couldn't be expressed.\nHow it lives sideways — in the tone, the distance, years later.",
    intro: `Resentment is anger that had nowhere to go. Something happened — an injustice, a disappointment, a pattern of being treated a certain way — and the response couldn't be expressed. So it stayed. It compounded. It became part of the furniture of a relationship or a situation.

The dangerous thing about resentment is that it's often invisible to the person carrying it. It expresses itself sideways — in tone, in distance, in small resistances. By the time you name it, it's been there a long time.

Anonymous thoughts about resentment posted here give it a name, finally. No performance of forgiveness required.`,
    keywords: ["resentment confessions anonymous", "bitter thoughts anonymous", "holding resentment"],
    related: ["anger", "betrayal", "forgiveness", "family", "parents"],
  },
  {
    slug: "disappointment",
    title: "Disappointment",
    description: "what happens when expectation meets reality",
    shortIntro: "The quiet grief of the gap between expected and actual.\nThe ways you haven't become who you thought you'd be.\nThe distance between the person you intended to be and the one you are.",
    intro: `Disappointment is one of the quieter griefs. It doesn't announce itself. It arrives in the gap between what you expected and what happened — in a relationship, a career, a version of your life, a version of yourself.

The hardest disappointments are the ones directed inward. The ways you haven't become who you thought you'd be. The things you thought you'd have figured out by now. The distance between the person you intended to be and the one you are.

Anonymous thoughts about disappointment posted here don't need the silver lining. The honest account of the gap — without the part where you find meaning in it — is enough. This is where that version gets to exist.`,
    keywords: ["disappointment confessions", "disappointed in myself anonymous", "life disappointment"],
    related: ["regret", "failure", "hope", "self-worth", "the-past"],
  },

  // ── GRIEF CLUSTER ─────────────────────────────────────────────────────────
  {
    slug: "grief",
    title: "Grief",
    description: "what loss actually feels like",
    shortIntro: "What loss actually feels like — not the timeline, the stages, the recovery arc.\nThe way it resurfaces years later in unexpected places.\nThe performance of being further along than you are.",
    intro: `Grief has a public timeline. There's a period of visible mourning, expected responses, a sequence that concludes. The private experience doesn't follow that timeline. It resurfaces years later in unexpected places. It doesn't move through stages cleanly. It doesn't end at the expected point.

The pressure to be "doing better" is one of the loneliest aspects of grief. The performance of recovery — for the comfort of the people around you, who need you to be okay — happens while the internal reality is still very much ongoing.

Anonymous thoughts about grief posted here exist outside that performance. Just the honest account of where you actually are, without any obligation to be further along.`,
    keywords: ["grief thoughts anonymous", "grieving anonymously", "what grief really feels like"],
    related: ["loss", "death", "heartbreak", "longing", "healing"],
  },
  {
    slug: "loss",
    title: "Loss",
    description: "what you're still missing",
    shortIntro: "Not only death.\nThe relationship. The future. The version of yourself that existed before something changed.\nThe grief without a clear script for mourning it.",
    intro: `Loss isn't only about death. You can lose a version of your life. A relationship. A place. A future you were certain was coming. A version of yourself that existed before something changed.

These losses don't always have clear social scripts. You can't grieve a future that never happened the same way you grieve a person. You can't explain to someone why the loss of a relationship feels like the loss of an entire self — your context, your witness, your daily life.

Anonymous thoughts about loss posted here don't require explanation. Every loss posted here was real to the person who experienced it, regardless of category.`,
    keywords: ["loss confessions anonymous", "grieving a loss anonymous", "missing what you lost"],
    related: ["grief", "death", "the-past", "change", "regret"],
  },
  {
    slug: "death",
    title: "Death",
    description: "the thing everyone's thinking about and no one's saying",
    shortIntro: "In the background of everything and rarely spoken honestly.\nWhat happens when you sit with the knowledge of how this ends.\nThe thoughts that couldn't be said in daylight.",
    intro: `Death is in the background of everything. Every relationship eventually ends in it. Every plan is made in the shadow of it. Most people have thought about it in ways they've never told anyone — their own death, the deaths of people they love, what it means that this is how things end.

The social response to honest discussion of death is discomfort. People pivot away from it, wrap it in euphemism, make reassuring noises. So the honest version stays internal.

Anonymous thoughts about death posted here are the version that couldn't be said elsewhere. No pivot. No reassurance. Just the honest account of what it's like to think about the thing that can't be avoided.`,
    keywords: ["thoughts about death anonymous", "death confessions anonymous", "thinking about mortality"],
    related: ["grief", "loss", "mortality", "fear", "meaning"],
  },
  {
    slug: "mortality",
    title: "Mortality",
    description: "living with the knowledge of the end",
    shortIntro: "When the knowledge comes close — a health scare, a decade, someone your age.\nThe thoughts that arrive in the space between routine and the edge.\nThe void doesn't flinch.",
    intro: `You know you're going to die. You've known for a long time. Most of the time this knowledge is manageable — held at a distance by routine, by plans, by the endless small tasks that make up a day. Then something happens — a health scare, a birthday that marks a decade, the death of someone your age — and the knowledge comes close.

The thoughts that follow are rarely ones you can share. They're too raw, too existential, too likely to concern the people who love you.

This is where they go instead. Anonymous thoughts about mortality, posted without a face. The void doesn't flinch.`,
    keywords: ["mortality thoughts anonymous", "existential thoughts anonymous", "facing death thoughts"],
    related: ["death", "meaning", "time", "fear", "aging"],
  },

  // ── SHAME CLUSTER ─────────────────────────────────────────────────────────
  {
    slug: "shame",
    title: "Shame",
    description: "what you can't look at in yourself",
    shortIntro: "Not what you did — what you are.\nThe belief that the fully known version of you would not be accepted.\nThe emotion that operates entirely in silence.",
    intro: `Shame is the emotion of believing you are wrong, not that you did something wrong. It's deeper than guilt. It attaches to your identity, not your actions. It says: you are fundamentally defective in a way that would make people leave if they really knew.

Shame operates in silence. Naming it — even to yourself — is the first step in reducing its power. Saying it to another person feels impossible. Saying it anonymously is something in between.

Anonymous thoughts about shame posted here are the ones that couldn't be said where someone could see your face. They exist now. They've been named. That changes something, even if the change is hard to measure.`,
    keywords: ["shame confessions anonymous", "ashamed of myself thoughts", "naming shame anonymous"],
    related: ["guilt", "vulnerability", "secrets", "identity", "self-worth"],
  },
  {
    slug: "secrets",
    title: "Secrets",
    description: "the thing only you know",
    shortIntro: "The thing only you know.\nThe specific weight of maintaining a version of yourself that accounts for what's inside.\nWhat it's like to finally put it down.",
    intro: `Every person has at least one thing they have never told anyone. The secret that lives entirely inside. Not because it's terrible — sometimes it isn't — but because something about it feels too specific, too revealing, too likely to change how you're perceived.

Carrying a secret is a particular kind of weight. It requires constant maintenance. You have to remember what you said to whom, which version of yourself is showing in which context. The secret becomes part of your architecture.

This is the place where secrets can be put down, anonymously, for once. The void holds them without asking questions, without judging their weight. Just the thing, finally said.`,
    keywords: ["secrets confessions anonymous", "telling a secret anonymously", "things I've never told anyone"],
    related: ["shame", "confession", "trust", "guilt", "vulnerability"],
  },
  {
    slug: "confession",
    title: "Confession",
    description: "saying the true thing, finally",
    shortIntro: "The act of saying the true thing, finally.\nNot for absolution — because the interior became too small to hold it alone.\nThe thing placed into the void, witnessed at last.",
    intro: `Confession is the act of saying something out loud that has only existed inside. Not for absolution. Not for forgiveness. Because the interior is sometimes too small to hold everything by itself, and the thing needs to exist somewhere outside your own head.

This is a confessional without a priest. Without consequences. Without anyone who knows your name. The thing you write here won't be used against you. It won't change your relationships or your reputation. It will simply exist — acknowledged, named, released into a void that receives without judgment.

The posts below are confessions. Real ones. Posted by people who needed to say the true thing, just once.`,
    keywords: ["anonymous confession", "confess something anonymous", "online confession no account"],
    related: ["secrets", "guilt", "shame", "truth", "regret"],
  },

  // ── IDENTITY CLUSTER ──────────────────────────────────────────────────────
  {
    slug: "identity",
    title: "Identity",
    description: "who you are when no one's watching",
    shortIntro: "The version of yourself before the presentation begins.\nThe contradictions, the desires that don't fit the narrative.\nWho you are when no one is building a picture of you.",
    intro: `There's the version of yourself you present — consistent, legible, the same person in every context with predictable responses. Then there's the more complicated version underneath: the contradictions, the desires that don't fit the narrative, the ways you've changed that haven't been officially registered anywhere.

These two versions get further apart over time. The presented self becomes more practiced. The interior self becomes harder to access.

Anonymous thoughts about identity posted here are from the interior version. The one that exists before the presentation begins. No audience to manage. No consistency to maintain. Just the honest account of what it's like to be you when no one is watching.`,
    keywords: ["identity thoughts anonymous", "who am I anonymous", "questioning identity thoughts"],
    related: ["belonging", "self-worth", "purpose", "change", "shame"],
  },
  {
    slug: "purpose",
    title: "Purpose",
    description: "looking for the reason",
    shortIntro: "What it feels like to not know why.\nThe specific emptiness of doing things well and feeling nothing about it.\nThe question that surfaces when the structure fails.",
    intro: `The question of purpose — what you're here for, what makes the effort worthwhile — arrives differently at different points in life. Sometimes it's a mild background hum. Sometimes it becomes urgent, especially after something changes: a loss, a success that didn't feel like enough, a realization that the path you're on doesn't go where you thought.

There are social scripts for purpose: follow your passion, find your calling, build something meaningful. None of them prepare you for the specific feeling of not knowing. Of moving through the days efficiently, doing things well, and feeling empty about all of it.

Anonymous thoughts about purpose posted here are the honest account of that feeling. Without the resolution that isn't actually there yet.`,
    keywords: ["purpose thoughts anonymous", "finding purpose anonymous", "no sense of purpose"],
    related: ["meaning", "identity", "work", "direction", "emptiness"],
  },
  {
    slug: "meaning",
    title: "Meaning",
    description: "the question underneath everything",
    shortIntro: "The question underneath everything.\nDeferred by routine, by work, by the next plan.\nWhat surfaces when there's nothing left to defer it with.",
    intro: `Meaning is the question that social structures exist to defer. Work, family, ritual, entertainment — they're all, in part, ways of not sitting with the question of what this is actually for. Most of the time, the deferral works. The question stays manageable.

Then something disturbs the structure. A loss, a transition, an idle hour that goes on too long. The question surfaces: what is this actually for?

Anonymous thoughts about meaning posted here are from people who sat with the question without finding the comfortable answer. This is the honest version — before the part where they told themselves it was fine.`,
    keywords: ["meaning of life thoughts anonymous", "searching for meaning anonymous", "existential thoughts"],
    related: ["purpose", "mortality", "hope", "direction", "emptiness"],
  },
  {
    slug: "self-worth",
    title: "Self-Worth",
    description: "what you believe you deserve",
    shortIntro: "Not confidence — the underlying belief about what you deserve.\nThe ways it selects, without announcement, for less than what you'd want for someone you loved.\nThe gap between the presented self and the internal belief.",
    intro: `Self-worth is not confidence. Confidence is a performance you can sustain for a while. Self-worth is the underlying belief — the one you carry into every relationship, every room, every decision — about what you deserve and who you fundamentally are.

When self-worth is low, the symptoms are often invisible. You function. You might even succeed. But something underneath keeps selecting for less — less respect, less care, less than what you'd want for someone you loved.

Anonymous thoughts about self-worth posted here are honest about the gap between the external presentation and the internal belief. No one here needs to see you as competent or okay. Just the true account.`,
    keywords: ["self-worth thoughts anonymous", "low self-worth confessions", "don't feel worthy anonymous"],
    related: ["confidence", "shame", "identity", "comparison", "vulnerability"],
  },
  {
    slug: "confidence",
    title: "Confidence",
    description: "what it looks like and what it actually is",
    shortIntro: "The performance and what it costs to maintain.\nHow convincing it looks from the outside.\nWhat's underneath when the performance stops.",
    intro: `Most people who seem confident are performing it to some degree. The performance becomes more practiced, more convincing. Eventually it's indistinguishable from the real thing — except internally, where the gap between the performed confidence and the actual feeling is still very much present.

Real confidence — the kind that doesn't require performance — is rarer than the quantity of confident-seeming people suggests. The people who seem most sure of themselves are often the most practiced at concealing the doubt.

Anonymous thoughts about confidence posted here are from people who dropped the performance for a moment and said what was underneath it. This is what that sounds like.`,
    keywords: ["confidence thoughts anonymous", "feeling insecure anonymous", "fake confidence thoughts"],
    related: ["self-worth", "fear", "imposter-syndrome", "self-doubt", "vulnerability"],
  },
  {
    slug: "imposter-syndrome",
    title: "Imposter Syndrome",
    description: "waiting to be found out",
    shortIntro: "Waiting to be found out.\nThe specific terror of being competent without believing it.\nThe way success compounds the exposure instead of dissolving it.",
    intro: `You are functioning. You may even be succeeding. And underneath all of it is the steady, quiet conviction that you are not qualified for the position you are in — that the people around you are real and you are improvising, and at some point this will become visible.

Imposter syndrome affects people at every level of achievement. Success doesn't dissolve it; sometimes it intensifies it. More success means more to lose when you're exposed.

Anonymous thoughts about imposter syndrome posted here are from people who are tired of the performance. The honest account of what it's like to be competent at something while never quite believing it.`,
    keywords: ["imposter syndrome thoughts anonymous", "feeling like a fraud anonymous", "not good enough anonymous"],
    related: ["confidence", "work", "shame", "self-doubt", "perfectionism"],
  },

  // ── RELATIONSHIPS CLUSTER ─────────────────────────────────────────────────
  {
    slug: "family",
    title: "Family",
    description: "the people you didn't choose",
    shortIntro: "The people you didn't choose and can't fully leave.\nDamage and love, held simultaneously without resolving either.\nThe patterns recognized too late to stop repeating.",
    intro: `Family relationships are the most complicated because they're lifelong and unchosen. You can leave a job, end a friendship, change a neighborhood. Family persists — in the relationships themselves, in what they made you, in the patterns that repeat in other contexts once you understand them.

The things people carry from family are often the hardest to say, because saying them involves describing people who loved you, or meant to, alongside the damage they did. These aren't opposites, but they're hard to hold simultaneously in conversation.

Anonymous thoughts about family posted here hold the complexity without having to resolve it. No one needs you to be fair to anyone here. Just the honest account.`,
    keywords: ["family thoughts anonymous", "family confessions anonymous", "complicated family feelings"],
    related: ["parents", "siblings", "childhood", "resentment", "forgiveness"],
  },
  {
    slug: "parents",
    title: "Parents",
    description: "what they gave you and what they took",
    shortIntro: "What was given and what was taken — before you had language for either.\nThe careful balance most people maintain when they talk about this.\nThe full version, without the edit.",
    intro: `The things your parents gave you — the good and the bad — are some of the most foundational and hardest to examine. You were shaped by them before you had language for the shaping. By the time you're old enough to see the patterns clearly, they're already inside you.

Most people maintain a careful balance in how they talk about their parents: not too critical, not too idealized, something that honors the complexity without being too raw about the damage.

Anonymous thoughts about parents posted here drop that balance. The honest account of what was given and what was taken — without having to protect anyone's feelings, including your own.`,
    keywords: ["parent thoughts anonymous", "parent issues confessions", "relationship with parents anonymous"],
    related: ["family", "childhood", "forgiveness", "identity", "resentment"],
  },
  {
    slug: "siblings",
    title: "Siblings",
    description: "the oldest competition",
    shortIntro: "The longest history in most people's lives.\nDecades of small injustices, comparisons, complicated love.\nThe feelings that don't simplify, only get more carefully managed.",
    intro: `Sibling relationships carry the longest history of any in most people's lives. They accumulate decades of small injustices, comparisons, loyalties, and complicated love. The feelings don't simplify as you get older — they just get more carefully managed.

The things you feel about your siblings — jealousy, resentment, grief at the distance that developed, love that doesn't know how to express itself, anger at the roles assigned in childhood that never quite changed — are rarely said plainly.

Anonymous thoughts about siblings posted here are the things that couldn't make it into the actual relationship. The honest account, without the careful management.`,
    keywords: ["sibling thoughts anonymous", "sibling issues confessions", "complicated sibling relationship"],
    related: ["family", "parents", "childhood", "resentment", "jealousy"],
  },
  {
    slug: "friendship",
    title: "Friendship",
    description: "the love that doesn't get enough credit",
    shortIntro: "The love that doesn't get enough credit.\nThe ones that ended without explanation.\nThe ones where you stopped being who you were to each other, and neither of you said so.",
    intro: `Friendship is supposed to be the uncomplicated one. Chosen, mutual, without the weight of family or the intensity of romantic love. But friendships carry their own complicated weight: the ones that ended without explanation, the ones where you stopped being who you were to each other without either of you acknowledging it, the ones where you give more than you receive and don't know how to say so.

Anonymous thoughts about friendship posted here are the things that couldn't be said to the friend in question, or to anyone who knows them. The honest account of what it's like to love people who are also sometimes disappointing, distant, or gone.`,
    keywords: ["friendship thoughts anonymous", "friendship confessions", "losing a friend anonymous"],
    related: ["trust", "betrayal", "loneliness", "belonging", "connection"],
  },
  {
    slug: "betrayal",
    title: "Betrayal",
    description: "what it does to you",
    shortIntro: "Not the event — the restructuring of everything you thought was real.\nHow it damages not just the relationship but your confidence in your own perception.\nThe thing that changes how you read people, long after.",
    intro: `Betrayal is not the event. It's the aftermath — the restructuring of your understanding of what was real. The relationship you thought you had turns out to have been different than you knew. Your judgment of people, which you relied on, failed in a specific and visible way. This is what makes betrayal compound: it doesn't just damage the relationship, it damages your confidence in your own perception.

Anonymous thoughts about betrayal posted here don't need to be fair to the person who betrayed you. They don't need to acknowledge complexity or nuance. This is the honest account of what it did to you.`,
    keywords: ["betrayal confessions anonymous", "being betrayed thoughts", "trust broken anonymous"],
    related: ["trust", "friendship", "anger", "forgiveness", "shock"],
  },
  {
    slug: "trust",
    title: "Trust",
    description: "what breaks and how it breaks you",
    shortIntro: "Not extended consciously — built slowly through evidence.\nWhat it means when that evidence is wrong.\nThe slow project of rebuilding it, especially in yourself.",
    intro: `Trust is not something you extend consciously. You don't decide, in most cases, to trust someone — it develops slowly, through evidence. Which means when it breaks, it takes more than the relationship down with it. It takes the evidence. The version of events you believed in. The confidence that your read on people was accurate.

Rebuilding trust — in a specific person, in people in general, in yourself — is one of the slower projects. There's no shortcut. And there's very little space to be honest about how hard it is.

Anonymous thoughts about trust posted here are the honest account of where you actually are — not where you're supposed to be in the recovery narrative.`,
    keywords: ["trust issues anonymous", "broken trust thoughts", "can't trust anyone anonymous"],
    related: ["betrayal", "vulnerability", "friendship", "love", "forgiveness"],
  },
  {
    slug: "rejection",
    title: "Rejection",
    description: "being told no by the thing that mattered",
    shortIntro: "What it activates — old and deep and physiologically real.\nThe cognitive work that can't reach the part that actually hurts.\nBefore the processing begins.",
    intro: `Rejection activates something old. The social pain of being rejected registers in the same regions as physical pain — which means the feeling of "it shouldn't be this bad" is physiologically wrong. It is this bad. The body is not overreacting.

The cognitive work — "it's not personal," "there are other opportunities," "this isn't about your worth" — often can't reach the part that actually hurts. You know it logically. You still feel it completely.

Anonymous thoughts about rejection posted here don't need to have done the cognitive work yet. The honest account of how it actually feels, before the processing begins.`,
    keywords: ["rejection thoughts anonymous", "being rejected confessions", "rejection hurts anonymous"],
    related: ["loneliness", "shame", "unrequited-love", "self-worth", "belonging"],
  },

  // ── MENTAL HEALTH CLUSTER ─────────────────────────────────────────────────
  {
    slug: "depression",
    title: "Depression",
    description: "the grey that doesn't lift",
    shortIntro: "The absence, not the feeling.\nThe color missing from things that should have it.\nThe interior experience no one can see from outside the functional surface.",
    intro: `Depression is not sadness. You can explain sadness. Depression is the absence — of color, of wanting, of the sense that anything is pointing in a direction. It's functioning without feeling what functioning usually feels like. Going through the motions of a life that should mean something and observing from a slight distance that it doesn't seem to be landing.

The social expectation of depression is that it's visible. That it stops you. But a lot of people carry depression invisibly — performing fine while experiencing something fundamentally different internally.

Anonymous thoughts about depression posted here are the honest account of the interior experience. Without the face that tells the world you're okay.`,
    keywords: ["depression thoughts anonymous", "depression confessions", "anonymous depression feelings"],
    related: ["loneliness", "emptiness", "hope", "healing", "isolation"],
  },
  {
    slug: "burnout",
    title: "Burnout",
    description: "what happens after too long",
    shortIntro: "The weight that accumulated gradually and announced itself suddenly.\nThe connection to meaning, broken.\nThe flatness that follows sustained effort without recovery.",
    intro: `Burnout arrives gradually and announces itself suddenly. The accumulated weight of sustained effort — effort that was supposed to mean something, effort that was supposed to lead somewhere — reaches a point where the connection to meaning breaks. You can still do the tasks. The tasks just feel hollow.

The social script for burnout is recovery: rest, reassess, rebuild. But the period before recovery, the actual experience of it, is rarely described honestly. The loss of caring. The flatness. The grief for a previous version of yourself who could do this without it costing so much.

Anonymous thoughts about burnout posted here are from that period. The honest account, before the recovery narrative.`,
    keywords: ["burnout confessions anonymous", "burned out thoughts", "exhausted anonymous"],
    related: ["work", "depression", "exhaustion", "change", "purpose"],
  },
  {
    slug: "healing",
    title: "Healing",
    description: "the process that doesn't go in a straight line",
    shortIntro: "Not linear, not where you're supposed to be by now.\nThe pressure to show progress alongside the reality of some months being worse than the last.\nThe honest account of wherever you actually are.",
    intro: `Healing is supposed to be the good part. The direction you want to be going. But the experience of it is often messier and less linear than the narrative suggests. You're not always further along than last month. Sometimes you're worse. Sometimes something you thought you'd moved through returns in a slightly different form.

The pressure to be healing correctly — to show progress, to arrive at acceptance, to not still be affected by things that happened a long time ago — is its own additional weight.

Anonymous thoughts about healing posted here don't need to show progress. The honest account of wherever you actually are in the process is what this place is for.`,
    keywords: ["healing thoughts anonymous", "healing journey confessions", "healing is hard anonymous"],
    related: ["therapy", "grief", "growth", "hope", "trauma"],
  },
  {
    slug: "therapy",
    title: "Therapy",
    description: "what happens and what doesn't",
    shortIntro: "What it does and what it doesn't.\nThe things that don't quite make it into the session.\nThe performance of progress for a therapist, the same way it's performed everywhere else.",
    intro: `Therapy is presented as the solution. The professional container for the things that can't be said elsewhere. And it does things — real things, over time. But it also has limits that aren't often acknowledged. The things you don't say in therapy because you don't know how, or because saying them makes them too real, or because you're performing progress for your therapist the same way you perform it everywhere else.

Anonymous thoughts about therapy posted here are the ones that didn't quite make it into the session. The honest account — including the ways therapy is working and the ways it isn't — without the edit.`,
    keywords: ["therapy thoughts anonymous", "therapy confessions", "things I can't tell my therapist"],
    related: ["healing", "vulnerability", "self-worth", "secrets", "depression"],
  },
  {
    slug: "trauma",
    title: "Trauma",
    description: "what it left behind",
    shortIntro: "Not the event — what it left in the nervous system.\nThe triggers that seem disproportionate until traced back.\nThe past inserting itself into the present without asking.",
    intro: `Trauma is not the event. It's what the event did to the nervous system, to the patterns, to the way certain situations feel even years later. The hypervigilance. The triggers that seem disproportionate until you trace them back. The ways the past inserts itself into the present without announcement.

Talking about trauma in the present tense is hard because the social expectation is that it's the past. You're supposed to be working on it, moving through it, processing it into something resolved. The honest account of still being in it — still being affected, still being managed by it in ways you don't always choose — is harder to voice.

Anonymous thoughts about trauma posted here are from people who told the honest version. This is what it sounds like.`,
    keywords: ["trauma thoughts anonymous", "trauma confessions", "living with trauma anonymous"],
    related: ["childhood", "healing", "shame", "fear", "therapy"],
  },

  // ── SELF CLUSTER ──────────────────────────────────────────────────────────
  {
    slug: "comparison",
    title: "Comparison",
    description: "measuring yourself against other people's exteriors",
    shortIntro: "Your interior against everyone else's exterior.\nThe automatic habit that arrives before you can intercept it.\nWhat it does to what you have, by giving it the wrong reference point.",
    intro: `You know intellectually that you're comparing your interior to everyone else's exterior. You know the social media version of someone's life is not their actual life. You know that the person whose career you're comparing yours to has their own internal experience that you can't see. The knowledge doesn't help.

Comparison persists because it's automatic, not rational. It happens before you can intercept it. And it has a very specific kind of damage — it makes the things you have feel like less than they are, because the reference point is always someone else's highlight.

Anonymous thoughts about comparison posted here are from people who were honest about the habit they can't stop, even when they know better.`,
    keywords: ["comparison thoughts anonymous", "comparing myself to others anonymous", "jealous of others"],
    related: ["jealousy", "self-worth", "social-media-pressure", "perfectionism", "identity"],
  },
  {
    slug: "jealousy",
    title: "Jealousy",
    description: "the emotion you're not supposed to admit to",
    shortIntro: "Accurate information about desire — that you want something you don't have.\nThe emotion most reluctant to admit because all three parts feel like weakness.\nThe distance between wanting and having.",
    intro: `Jealousy is one of the emotions people are most reluctant to admit — because admitting it involves confessing that you want something you don't have, that someone else has it, and that this causes you pain. All three of these feel like admissions of inadequacy.

But jealousy is just accurate information about desire. You want something. You can see that someone else has it. The pain is the distance between the two.

Anonymous thoughts about jealousy posted here are from people who were honest about the feeling without having to perform being above it. The void doesn't judge you for wanting what you want.`,
    keywords: ["jealousy confessions anonymous", "jealous thoughts anonymous", "envious of others"],
    related: ["comparison", "love", "resentment", "shame", "self-worth"],
  },
  {
    slug: "perfectionism",
    title: "Perfectionism",
    description: "the standard that can't be met",
    shortIntro: "Not high standards — managed avoidance.\nThe standard that keeps moving so the work never has to be released into judgment.\nWhat it costs in time and life not lived.",
    intro: `Perfectionism is often misread as high standards. What it actually is: a system of managed avoidance. If you hold yourself to a standard that can't be met, you never have to release anything into judgment. Everything remains in perpetual preparation, perpetual improvement, perpetual not-quite-ready.

The cost is time, paralysis, and the specific exhaustion of maintaining a standard that keeps moving. The cost is work that never gets done, opportunities not taken, a life slightly observed from the editing room rather than lived.

Anonymous thoughts about perfectionism posted here are from people who are in the middle of this and honest about what it's actually costing them.`,
    keywords: ["perfectionism thoughts anonymous", "perfectionist confessions", "not good enough perfectionism"],
    related: ["anxiety", "self-worth", "failure", "comparison", "self-doubt"],
  },
  {
    slug: "self-doubt",
    title: "Self-Doubt",
    description: "the voice that won't stop questioning",
    shortIntro: "The running commentary on your own inadequacy.\nEvery output reviewed, every interaction, after the fact.\nThe paradox: the people who feel it most are often doing the most careful work.",
    intro: `Self-doubt is the ongoing commentary on your own inadequacy. It runs in the background of every decision, every interaction, every output — asking whether you were good enough, whether people could tell you were uncertain, whether the thing you did was actually as good as it seemed.

The paradox of self-doubt is that the people who experience it most intensely are often the ones doing the most careful work. Doubt is, in part, a side effect of caring. It doesn't make it easier to carry.

Anonymous thoughts about self-doubt posted here are from people who know this and are still inside it. The honest account of what the running commentary sounds like.`,
    keywords: ["self-doubt confessions anonymous", "doubting myself thoughts", "am I good enough anonymous"],
    related: ["confidence", "imposter-syndrome", "anxiety", "fear", "perfectionism"],
  },
  {
    slug: "emptiness",
    title: "Emptiness",
    description: "when nothing seems to fill it",
    shortIntro: "Not sadness — the absence.\nThe flatness. The things that should land and don't.\nWhat it's like when the interior gets very quiet in a way that feels nothing like peace.",
    intro: `Emptiness is one of the harder things to describe because it's not the presence of a bad feeling — it's the absence. The flatness. The sense that things that should matter don't quite seem to, that experiences pass through without landing, that the interior has become very quiet in a way that doesn't feel like peace.

It's different from sadness, different from depression — though they can coexist. It's specifically the quality of not being able to feel what you're supposed to feel about the things that should mean something.

Anonymous thoughts about emptiness posted here are the honest account of that experience. From people who know exactly what you mean when you describe it.`,
    keywords: ["emptiness thoughts anonymous", "feeling empty anonymous", "numb and empty confessions"],
    related: ["depression", "purpose", "meaning", "loneliness", "burnout"],
  },
  {
    slug: "desire",
    title: "Desire",
    description: "what you want but won't admit",
    shortIntro: "What you want, before the editing.\nThe inconvenient version — not what you've agreed to want, the actual thing.\nThe void receives it without judgment.",
    intro: `Desire is edited constantly. What you want collides with what you're supposed to want, what you've agreed to want, what the version of yourself you've built would want. The true version — unedited, ungoverned by the external picture of your life — is often more inconvenient.

This is the place for the inconvenient version. Anonymous thoughts about desire posted here don't need to fit the narrative you've built. They don't need to be appropriate or reasonable or something you'd admit to in daylight.

The void doesn't edit. Whatever you want — fully and actually — this is where it can be said.`,
    keywords: ["desire confessions anonymous", "want something I can't have anonymous", "hidden desires anonymous"],
    related: ["love", "shame", "secrets", "freedom", "identity"],
  },

  // ── LIFE SITUATIONS ───────────────────────────────────────────────────────
  {
    slug: "failure",
    title: "Failure",
    description: "the thing that taught you something you didn't want to learn",
    shortIntro: "The version before the lesson is visible.\nThe specific fact of something not working, often with an audience.\nWhat it's like to be inside it before the narrative has arrived.",
    intro: `The narrative of failure — the one you get from motivational culture — says it's a teacher, a necessary step, the thing that makes success meaningful when it arrives. This is all true in the retrospective version. In the immediate experience, failure is just the fact of something not working, often with an audience.

The honest experience of failure is rarely discussed because failure is supposed to be temporary, a station on the way somewhere else. The version where you don't yet know if there's a lesson, where you're just inside the experience of having failed — that version is harder to voice.

This is where that version goes. Anonymous, unframed by outcome.`,
    keywords: ["failure confessions anonymous", "failed at something anonymous", "dealing with failure thoughts"],
    related: ["success", "regret", "shame", "growth", "mistakes"],
  },
  {
    slug: "success",
    title: "Success",
    description: "getting what you wanted and what comes after",
    shortIntro: "Getting what you wanted, and what comes after.\nThe relief smaller than expected.\nThe emptiness that follows the milestone that wasn't supposed to feel like this.",
    intro: `Success is supposed to be the resolution. You work toward something, you achieve it, and the achievement means something. What people don't say often enough: success doesn't always land the way it was supposed to. The relief is often smaller than expected. The sense of emptiness that sometimes follows is disorienting, hard to name, impossible to admit.

Anonymous thoughts about success posted here are the honest account of the version after the milestone — the complicated feelings that don't fit into the achievement narrative. What you actually felt. Not what you were supposed to feel.`,
    keywords: ["success thoughts anonymous", "achieved something and feel empty", "success feels hollow"],
    related: ["failure", "imposter-syndrome", "purpose", "fear", "emptiness"],
  },
  {
    slug: "work",
    title: "Work",
    description: "what it's really like",
    shortIntro: "The inner experience of where most of your hours go.\nThe frustrations, the wasted potential, the long stretches without meaning.\nThe version that doesn't get said.",
    intro: `Work is where most people spend most of their waking hours. The feelings it generates — the frustrations, the failures, the specific dynamics of being managed or managing, the sense of wasted potential, the moments of genuine meaning alongside the long stretches of meaninglessness — don't have many places to go.

You can't say most of it to colleagues. A fraction of it makes it into conversations with friends who have their own work to complain about. The inner experience of professional life — what it's actually like — is largely unspoken.

Anonymous thoughts about work posted here are the version that doesn't go anywhere else. The honest account of what it's actually like.`,
    keywords: ["work thoughts anonymous", "job confessions anonymous", "career feelings anonymous"],
    related: ["burnout", "purpose", "money", "failure", "frustration"],
  },
  {
    slug: "money",
    title: "Money",
    description: "the thing everyone's thinking about and no one's saying",
    shortIntro: "The last real taboo — more intimate than most things.\nThe daily calculations, the gap between presented life and financial reality.\nWhat it actually feels like to live in a body that costs money to maintain.",
    intro: `Money is one of the last real taboos. More people will tell you about their sex life than their bank account. The specific anxieties of financial insecurity — the daily calculations, the shame of the gap between the life you present and the financial reality, the fear of what happens if something else goes wrong — live almost entirely in private.

Anonymous thoughts about money posted here are the things that couldn't be said where anyone knows your income, your rent, your debt. The honest account of what it actually feels like to live in a body that costs money to maintain.`,
    keywords: ["money thoughts anonymous", "financial stress anonymous", "money anxiety confessions"],
    related: ["work", "stress", "failure", "security", "shame"],
  },
  {
    slug: "change",
    title: "Change",
    description: "what it's like to become someone else",
    shortIntro: "Something ending so something else can begin.\nThe person before and the person after — the distance can feel like loss even when the change was chosen.\nThe grief that doesn't get named because change is supposed to be good.",
    intro: `Change is sold as positive: growth, transformation, new chapters. The experience of it is more ambiguous. Something has to end for something else to begin. The person you were before a change and the person you are after — the distance between them can feel like loss even when the change was chosen.

Becoming someone new means leaving something behind. The previous context, the previous self, sometimes the people who knew the previous version of you. This loss is rarely named because change is supposed to be the good thing.

Anonymous thoughts about change posted here are the honest account of both — what was gained and what was left behind. Without having to perform gratitude for the whole package.`,
    keywords: ["change thoughts anonymous", "going through a change anonymous", "fear of change confessions"],
    related: ["fear", "growth", "identity", "the-past", "loss"],
  },
  {
    slug: "growth",
    title: "Growth",
    description: "the uncomfortable version",
    shortIntro: "The uncomfortable version — dislocation, not expansion.\nCan't fit back into the old patterns. Not yet settled in the new ones.\nThe middle, before the destination, before the part where it makes sense.",
    intro: `Growth is supposed to feel like expansion. And eventually it does. But the experience in the middle is often more like dislocation — you can't fit back into the old patterns and you're not yet comfortable in the new ones. You've outgrown the context you were in without yet arriving somewhere else.

Growth is hard to talk about because it sounds like self-congratulation. And the uncomfortable version — the loss, the friction, the not-yet-knowing — is harder to describe than the destination.

Anonymous thoughts about growth posted here are from the middle — where the old doesn't work and the new isn't settled yet. The honest account.`,
    keywords: ["growth thoughts anonymous", "personal growth confessions", "growing pains anonymous"],
    related: ["change", "healing", "failure", "purpose", "direction"],
  },
  {
    slug: "aging",
    title: "Aging",
    description: "what time is actually doing",
    shortIntro: "The flashes of recognition. A photograph, a birthday, a comment.\nThe internal sense of yourself that hasn't kept pace with the external evidence.\nGrief for time that moved faster than expected and didn't announce itself.",
    intro: `Aging happens in flashes of recognition. A photograph, a birthday, a comment from someone younger that makes you realize how much time has actually passed. The internal experience of yourself hasn't kept pace with the external evidence. You still feel, in some significant sense, like an earlier version of yourself.

The feelings about aging — grief for the body you had, for the possibilities that have narrowed, for time that moved faster than expected — don't have much space. Age is supposed to come with wisdom and acceptance.

Anonymous thoughts about aging posted here are from before the acceptance. The honest account of what it's actually like to watch time move.`,
    keywords: ["aging thoughts anonymous", "getting older feelings", "time passing confessions"],
    related: ["mortality", "time", "the-past", "identity", "body"],
  },
  {
    slug: "the-past",
    title: "The Past",
    description: "what you can't stop going back to",
    shortIntro: "The gravity that pulls you back despite knowing better.\nWhat you keep returning to — information, unfinished mourning, a person you were.\nThe honest account of what you found when you went back.",
    intro: `The past has a gravity. You know you're not supposed to live there. You know forward is the direction. You know that revisiting certain memories or decisions or conversations does not change them. The knowledge doesn't stop the return.

What you keep going back to — what's worth examining — is usually information. The past is trying to tell you something you haven't fully heard yet. Or it's loss that hasn't been fully mourned. Or it's the person you used to be who needs acknowledgment.

Anonymous thoughts about the past posted here are from people who went back. The honest account of what they found.`,
    keywords: ["past thoughts anonymous", "living in the past anonymous", "can't let go of the past"],
    related: ["nostalgia", "regret", "memory", "loss", "longing"],
  },
  {
    slug: "nostalgia",
    title: "Nostalgia",
    description: "the ache for what was",
    shortIntro: "Not just missing something — knowing time moved in one direction and won't be reversed.\nThe version in memory, probably better than it actually was.\nThe ache, regardless.",
    intro: `Nostalgia is not just missing something. It's the specific ache of knowing that time moved in only one direction. The version of yourself in a particular memory — younger, or happier, or simply less complicated — is gone, and no amount of revisiting the memory brings them back.

The past that nostalgia returns to is usually partly constructed. Memory is not reliable. But the ache is real regardless of whether the thing remembered was as good as it feels in the remembering.

Anonymous thoughts about nostalgia posted here are the honest account of the ache — without the reassurance that the present is just as good. This is where the grief for the past gets to be exactly that.`,
    keywords: ["nostalgia confessions anonymous", "missing the past anonymous", "nostalgic thoughts"],
    related: ["the-past", "memory", "longing", "childhood", "loss"],
  },
  {
    slug: "hope",
    title: "Hope",
    description: "what it costs to keep it",
    shortIntro: "Not the easy thing — maintaining it when the evidence is against it.\nThe vulnerability of wanting what you don't yet have.\nThe exhaustion of hoping again after it didn't work the last time.",
    intro: `Hope is not always the easy thing. Maintaining it in circumstances that don't support it, in periods where the evidence is against it, is an act of will that takes real energy. And there are times when hope feels like the most naive thing available — when the thing you're hoping for has let you down enough times that hoping again requires overriding experience.

The honest account of hope includes the cost of it. The vulnerability of wanting something and not yet having it. The exposure of maintaining the belief that things can be different.

Anonymous thoughts about hope posted here are the whole version — the wanting alongside the exhaustion of wanting. Without having to perform optimism.`,
    keywords: ["hope thoughts anonymous", "hoping for something anonymous", "losing hope confessions"],
    related: ["depression", "healing", "purpose", "meaning", "change"],
  },
  {
    slug: "childhood",
    title: "Childhood",
    description: "what you carry from the beginning",
    shortIntro: "Where the parameters for everything else were set.\nBefore language, before awareness, before being able to see the patterns being built.\nWhat was given and what was taken from the very beginning.",
    intro: `Childhood is the original context — the one that set the parameters for everything that followed. The patterns absorbed before you had language to name them. The version of the world you learned from the specific family you happened to be born into.

The things people carry from childhood are often the hardest to see clearly because they're the baseline. They feel like the way things are, not the way things were. The examination of it — what was given that you never asked for, what was missing that should have been there — is slow and often uncomfortable.

Anonymous thoughts about childhood posted here are the honest account of what it actually was and what it left behind.`,
    keywords: ["childhood thoughts anonymous", "childhood trauma anonymous", "things I carry from childhood"],
    related: ["parents", "family", "memory", "trauma", "identity"],
  },
  {
    slug: "addiction",
    title: "Addiction",
    description: "what you use and what it costs",
    shortIntro: "What you're using and what it's actually managing.\nThe legal versions that don't carry the word but serve the same function.\nThe pattern that costs more than it solves.",
    intro: `Addiction has many forms beyond the obvious ones. There are the substances, yes. And there's also the compulsive work, the compulsive care-giving, the relentless busyness, the substances that are legal and therefore not called addiction even when they serve the same function.

What they share: the thing is being used to manage something that hasn't been dealt with directly. The cost accumulates. The management becomes its own problem.

Anonymous thoughts about addiction posted here are from people who are inside this — or were, or are watching someone else be — and honest about what it actually looks like from the inside. No recovery narrative required. Just the true account.`,
    keywords: ["addiction confessions anonymous", "struggling with addiction thoughts", "addicted to something anonymous"],
    related: ["shame", "healing", "secrets", "self-destruction", "control"],
  },
  {
    slug: "body",
    title: "Body",
    description: "the skin you live in",
    shortIntro: "The private relationship — not the presented one.\nWhat you actually think about living in this specific body.\nThe gap between the public version and the internal one, all the time.",
    intro: `The relationship most people have with their body is one of the most edited parts of their interior life. You curate what you say, manage what you reveal, perform a certain relationship with your physical self that may not match the actual one.

The actual relationship — what you think about your appearance, your health, your aging, the physical experience of being in this specific body in this specific world — is more complicated, more critical, sometimes more loving than what gets shown.

Anonymous thoughts about the body posted here are the private version. Without the performance of either confidence or appropriate dissatisfaction. Just the honest account of what it's like to live here.`,
    keywords: ["body image thoughts anonymous", "body confessions", "relationship with my body anonymous"],
    related: ["shame", "identity", "aging", "self-worth", "comparison"],
  },
  {
    slug: "direction",
    title: "Direction",
    description: "not knowing which way to go",
    shortIntro: "The map that doesn't extend to where you are.\nThe specific disorientation of not knowing what comes next when the infrastructure fails.\nWhat it looks like to be honest about not knowing.",
    intro: `There are periods of life that have clear direction — school, a job, a relationship that determines the next decade. And there are periods where the next step is genuinely unclear. Not because of laziness or failure to plan, but because the map doesn't extend to where you are.

The experience of not knowing where you're going — when the infrastructure that used to make the path visible is no longer operating — is one of the harder things to be honest about. There's enormous pressure to have a direction, to know your next move, to be working toward something.

Anonymous thoughts about direction posted here are from people who are honest about not knowing. This is what that looks like.`,
    keywords: ["lost in life anonymous", "no direction thoughts", "don't know what to do anonymous"],
    related: ["purpose", "meaning", "change", "work", "identity"],
  },
  {
    slug: "exhaustion",
    title: "Exhaustion",
    description: "more than just tired",
    shortIntro: "Not tired — bone-level depleted.\nThe performance of being okay when the reserve has been gone for a long time.\nThe honest count of what there is left.",
    intro: `Exhaustion is not the same as needing sleep. It's the bone-level depletion that comes from sustained effort without sufficient recovery — physical, emotional, social. The kind where you've been fine for so long that being fine is itself exhausting.

The honest account of exhaustion includes not just what you're tired from, but what you're tired of. The performance. The maintenance. The volume of effort required just to keep things as they are.

Anonymous thoughts about exhaustion posted here are from people who are done pretending they have more left than they do. The honest account, without the performance of being okay.`,
    keywords: ["exhaustion thoughts anonymous", "tired of everything anonymous", "emotionally exhausted confessions"],
    related: ["burnout", "depression", "meaning", "change", "care"],
  },
  {
    slug: "freedom",
    title: "Freedom",
    description: "what you're looking for and what it would actually cost",
    shortIntro: "What you want to be free from — and the ambivalence that comes with it.\nThe things that structure your life are also the ones you want to escape.\nBoth are real. Neither resolves the other.",
    intro: `Freedom is almost always relational — it means freedom from something specific. A relationship, a job, a version of yourself, a set of obligations. The desire for it is real. So is the ambivalence: the things you want to be free from are also the things that structure your life, that contain the people you love, that make you recognizable to yourself.

Anonymous thoughts about freedom posted here are honest about both sides. The genuine desire for a different life — and the grief for what would have to change for that to be possible.`,
    keywords: ["freedom thoughts anonymous", "wanting to escape anonymous", "craving freedom confessions"],
    related: ["change", "identity", "fear", "belonging", "desire"],
  },
  {
    slug: "self-destruction",
    title: "Self-Destruction",
    description: "the ways you get in your own way",
    shortIntro: "The quiet pattern, not the dramatic act.\nThe choosing, again, of what's familiar even when you can see what it costs.\nWhat it looks like to observe yourself doing it and keep going.",
    intro: `Self-destruction is rarely dramatic. More often it's the quiet, consistent choosing of options that cost you — staying in situations you know are harmful, repeating patterns you understand, making choices that the more rational part of you can observe and disagree with in real time.

It happens because the harm is familiar. Familiarity has a pull that new and better doesn't always match.

Anonymous thoughts about self-destruction posted here are honest about the pattern without needing to have exited it. The observation that you're doing the thing, again, and what that feels like from the inside.`,
    keywords: ["self-destructive thoughts anonymous", "self-sabotage confessions", "hurting myself anonymous"],
    related: ["addiction", "shame", "anger", "healing", "patterns"],
  },
  {
    slug: "control",
    title: "Control",
    description: "what you're trying to hold together",
    shortIntro: "Trying to hold the edges of something uncertain.\nThe specific safety of managing what's manageable when the things that matter can't be controlled.\nWhat it costs to keep the grip.",
    intro: `The desire for control is, at its root, the desire for safety in a situation that doesn't guarantee it. You control what you can control — your schedule, your appearance, your environment, your responses — because the alternative is sitting with the knowledge that the things that matter most are not controllable.

The need for control is understood intellectually. It's much harder to release in practice, because releasing it means accepting uncertainty in a way that the body has spent a long time trying to prevent.

Anonymous thoughts about control posted here are from people who are honest about what they're trying to hold together and what it's costing them.`,
    keywords: ["control issues anonymous", "need to control things confessions", "losing control anonymous"],
    related: ["anxiety", "fear", "perfectionism", "addiction", "vulnerability"],
  },
  {
    slug: "social-media-pressure",
    title: "Social Media",
    description: "what it actually does to you",
    shortIntro: "The mechanism working below the level of knowing.\nWhat it does to your sense of what you have and who you are.\nThe honest account that can't be posted where the problem is worst.",
    intro: `Social media is designed to produce comparison, longing, and the ongoing performance of a self that's worth following. You know this. Knowing doesn't protect you. The mechanisms are below the level where knowing helps.

The honest account of what social media does to your sense of self, your sense of your life, your sense of what you have and don't have — that's not the account that gets posted on social media. It goes somewhere else.

Anonymous thoughts about social media posted here are from people who named what it's actually doing. Without having to manage the irony of posting it somewhere that makes the problem worse.`,
    keywords: ["social media thoughts anonymous", "social media making me feel bad", "comparison on social media"],
    related: ["comparison", "jealousy", "identity", "self-worth", "performance"],
  },
  {
    slug: "loneliness-in-a-crowd",
    title: "Invisible",
    description: "unseen inside a full life",
    shortIntro: "Present. Participating. Doing everything that should add up to connection.\nAnd underneath it, nobody actually sees you.\nThe specific loneliness of being unseen inside a full life.",
    intro: `The specific loneliness of feeling invisible in a room full of people — or in a relationship, or in a family — is one of the harder ones to name because from the outside, it's not visible. You're present. You're participating. You're doing all the things that should add up to connection.

And underneath it, nobody actually sees you. The specific interior experience, the version of yourself that exists past the functional surface, goes unwitnessed.

Anonymous thoughts about invisibility posted here are from people who know exactly this feeling. The honest account of being present and unseen, finally witnessed, at least here.`,
    keywords: ["feeling invisible anonymous", "unseen in a crowd thoughts", "nobody sees me confessions"],
    related: ["loneliness", "belonging", "connection", "identity", "depression"],
  },

  // ── NEW TOPICS 1–25 ───────────────────────────────────────────────────────
  {
    slug: "doomscrolling",
    title: "Doomscrolling",
    description: "the ritual of watching the world end",
    shortIntro: "The ritual of consuming catastrophe before sleep.\nFeeding on disasters that don't touch you but won't let you go.\nThe compulsion to keep watching because stopping feels naive.",
    intro: `Doomscrolling is not about information. It's the architecture of the feed making catastrophe the most efficient content. You watch because stopping feels naive. Because knowing feels like control. Because the void of not watching is somehow worse than the dread of watching.\n\nAnonymous thoughts about doomscrolling posted here are honest about the compulsion and what it costs — the sleep, the mood, the low-grade dread that doesn't lift because you never stop feeding it.`,
    keywords: ["doomscrolling thoughts anonymous", "doom scrolling addiction", "news anxiety anonymous"],
    related: ["anxiety", "digital-withdrawal", "second-hand-life", "rest-anxiety", "social-media-pressure"],
  },
  {
    slug: "parasocial-love",
    title: "Parasocial Love",
    description: "loving someone who doesn't know you exist",
    shortIntro: "Loving someone who broadcasts to millions and not to you.\nThe one-way intimacy that feels real because it almost is.\nWhat it costs to care about someone who will never know your name.",
    intro: `Parasocial love is not delusion. It's the predictable result of spending hundreds of hours with someone's voice, their humor, the texture of their personality — without the reciprocal layer of being known. The brain doesn't distinguish well. It registers intimacy where the mechanics of intimacy exist.\n\nAnonymous thoughts about parasocial love posted here are the honest account of what it's like to grieve someone you never had, to feel genuine loss over an ending that only happened to one person.`,
    keywords: ["parasocial relationship thoughts", "loving a creator anonymous", "one-sided parasocial bond"],
    related: ["loneliness", "obsession", "unrequited-love", "connection", "isolation"],
  },
  {
    slug: "ghosting",
    title: "Ghosting",
    description: "the disappearance that offers no explanation",
    shortIntro: "There one day and gone, with no ending offered.\nThe interpretation left entirely to you.\nNot knowing if you did something, or just weren't worth the goodbye.",
    intro: `Ghosting is not an ending. It's the absence of one. The conversation stops. The presence disappears. You're left with the story — the one you have to write yourself because the other person declined to provide it. The ambiguity is the punishment, whether intended or not.\n\nAnonymous thoughts about ghosting posted here are from both sides — the people who disappeared and the people who were left to wonder. The honest account of what the silence does.`,
    keywords: ["ghosting confessions anonymous", "being ghosted thoughts", "disappeared without explanation"],
    related: ["rejection", "heartbreak", "betrayal", "trust", "the-unspoken-thing"],
  },
  {
    slug: "situationship",
    title: "Situationship",
    description: "the relationship that refuses to name itself",
    shortIntro: "Everything a relationship has, except the word.\nThe limbo between wanting more and pretending you don't.\nThe feelings that are real inside a container that isn't.",
    intro: `A situationship has all the emotional architecture of a relationship — the intimacy, the expectation, the weight of that person's presence and absence — without the definition that would make your feelings legible to anyone, including yourself. You can't say you're heartbroken. Nothing officially existed.\n\nAnonymous thoughts about situationships posted here are from people in the middle of this or recovering from the ending of something that technically wasn't. The honest account of caring about a thing with no name.`,
    keywords: ["situationship confessions", "undefined relationship thoughts", "limbo relationship anonymous"],
    related: ["love", "heartbreak", "avoidance", "emotional-dependence", "the-unspoken-thing"],
  },
  {
    slug: "breadcrumbing",
    title: "Breadcrumbing",
    description: "kept close enough to stay, not close enough to matter",
    shortIntro: "Just enough contact to prevent departure.\nThe minimum viable attention that maintains the option.\nThe cruelty that doesn't call itself cruelty.",
    intro: `Breadcrumbing is the architecture of maintained ambiguity. The occasional text. The like at 2am. The just-enough contact that preserves optionality for one person at the cost of everything for the other. It's not always malicious — sometimes it's conflict avoidance, sometimes genuine ambivalence. It rarely matters which.\n\nAnonymous thoughts about breadcrumbing posted here are from both sides — the people managing options and the people being managed. The honest account of being kept, and what it's like to keep someone.`,
    keywords: ["breadcrumbing relationship thoughts", "being strung along anonymous", "hot and cold relationship"],
    related: ["situationship", "emotional-withholding", "rejection", "avoidance", "ghosting"],
  },
  {
    slug: "dissociation",
    title: "Dissociation",
    description: "watching your own life from somewhere outside it",
    shortIntro: "Present in the room but not quite in the body.\nThe glass between you and what's happening.\nFunctioning from a slight remove that nobody else can see.",
    intro: `Dissociation is the mind's method of managing what can't be directly processed. You're there, technically. The conversation is happening, the day is moving, your body is performing the expected functions. And underneath it, something is watching from a slight distance — detached, observing, not quite in the driver's seat.\n\nAnonymous thoughts about dissociation posted here are from people who know this feeling and rarely have language for it. The honest account of being in your life from the outside.`,
    keywords: ["dissociation thoughts anonymous", "depersonalization confessions", "checked out from reality"],
    related: ["trauma", "anxiety", "emotional-repression", "chosen-numbness", "hypervigilance"],
  },
  {
    slug: "people-pleasing",
    title: "People-Pleasing",
    description: "the exhaustion of erasing yourself for others",
    shortIntro: "Saying yes to everything and meaning none of it.\nThe identity that exists only in other people's comfort.\nFear with better manners.",
    intro: `People-pleasing is not kindness. It's fear with better manners. The constant calibration of what others need, what they want to hear, what reaction to perform — it's a survival strategy that eventually costs you the ability to know what you actually think, want, or feel.\n\nAnonymous thoughts about people-pleasing posted here are from people who are tired of the edit. The honest account of what it's like to have spent years making yourself acceptable — and what it would take to stop.`,
    keywords: ["people pleasing thoughts anonymous", "can't say no anonymous", "approval seeking confessions"],
    related: ["fawning", "validation-hunger", "approval-addiction", "codependency", "shame"],
  },
  {
    slug: "hypervigilance",
    title: "Hypervigilance",
    description: "the body that learned the world wasn't safe",
    shortIntro: "Always scanning, always prepared for what comes next.\nExhausted from an emergency that isn't happening anymore.\nThe nervous system that never got the all-clear.",
    intro: `Hypervigilance is the nervous system's adaptation to a history of threat. It scans constantly — body language, tone of voice, exits, changes in atmosphere. It developed for a reason. The problem is that it doesn't turn off when the threat is gone. It keeps running the emergency protocol in ordinary rooms.\n\nAnonymous thoughts about hypervigilance posted here are from people whose bodies are still protecting them from something that already happened. The honest account of living on alert in a world that looks safe to everyone else.`,
    keywords: ["hypervigilance thoughts anonymous", "always on guard anonymous", "trauma nervous system"],
    related: ["trauma", "anxiety", "dissociation", "fawning", "emotional-repression"],
  },
  {
    slug: "fawning",
    title: "Fawning",
    description: "becoming harmless before they can make you hurt",
    shortIntro: "Smiling your way out of danger.\nAppeasement as a survival strategy that became a personality.\nThe fourth trauma response nobody talks about.",
    intro: `Fawning is the fourth trauma response — less discussed than fight, flight, or freeze, and harder to recognize because it looks like being nice. You appease, accommodate, become whatever the moment requires to keep the threat at bay. It develops in environments where being yourself was dangerous. It persists long after those environments are gone.\n\nAnonymous thoughts about fawning posted here are from people who have been whoever was needed in the room for years — and the specific exhaustion of finally recognizing what they've been doing.`,
    keywords: ["fawning trauma response anonymous", "people pleasing survival mode", "chronic people pleaser"],
    related: ["people-pleasing", "hypervigilance", "trauma", "codependency", "shame"],
  },
  {
    slug: "codependency",
    title: "Codependency",
    description: "needing someone to need you",
    shortIntro: "The love that can't exist without being necessary.\nTheir mood as your mood. Their crisis as your purpose.\nWhere care ends and control begins.",
    intro: `Codependency is care that has become entangled with need. You love someone, and also their wellbeing has become the organizing principle of your life. Their mood is your mood. Their problems are your problems. Your sense of worth is connected to whether they're okay.\n\nAnonymous thoughts about codependency posted here are the honest account of loving someone more than is sustainable — and what it's like to slowly understand the difference between love and need.`,
    keywords: ["codependency thoughts anonymous", "codependent relationship confessions", "loving too much anonymous"],
    related: ["emotional-dependence", "people-pleasing", "overcaring", "attachment-wound", "caregiver-exhaustion"],
  },
  {
    slug: "emotional-repression",
    title: "Emotional Repression",
    description: "what stays buried and what it costs",
    shortIntro: "The feelings managed away rather than moved through.\nStrength that is actually avoidance with better posture.\nThe body keeping the score when the mind won't.",
    intro: `Emotional repression is not strength. It's the management of experience below the level of acknowledgment. The anger redirected. The grief postponed. The fear converted into productivity. It works for a while. The cost accumulates in other currencies — the tension in the body, the flattening of feeling, the sudden arrivals of things that had been under management for too long.\n\nAnonymous thoughts about emotional repression posted here are from people who have spent years not feeling what they feel — and what surfaces when the management fails.`,
    keywords: ["emotional repression confessions", "suppressing emotions anonymous", "burying feelings thoughts"],
    related: ["dissociation", "chosen-numbness", "hypervigilance", "fawning", "anger"],
  },
  {
    slug: "avoidance",
    title: "Avoidance",
    description: "the long way around what you know you must face",
    shortIntro: "Every detour that isn't the thing.\nFear with a schedule.\nHow avoidance eventually becomes the thing itself.",
    intro: `Avoidance is not laziness. It's fear with a schedule. The task that stays on the list. The conversation that keeps getting rescheduled. The difficult email. The thing underneath all the other things you'd rather do instead.\n\nAnonymous thoughts about avoidance posted here are the honest account of the things people are not doing and why — the specific texture of delaying what actually matters.`,
    keywords: ["avoidance thoughts anonymous", "avoiding something anonymous", "emotional avoidance confessions"],
    related: ["procrastination", "anxiety", "fear", "the-almost", "self-destruction"],
  },
  {
    slug: "intrusive-thoughts",
    title: "Intrusive Thoughts",
    description: "the ones you didn't invite and can't evict",
    shortIntro: "Thoughts that arrive unbidden and stay too long.\nThe horror of what the mind generates without permission.\nNot a reflection of who you are — just of what a mind does.",
    intro: `Intrusive thoughts are one of the most universally experienced and least discussed phenomena of mental life. They arrive without invitation — violent, disturbing, deeply unwanted — and their arrival is not an indicator of who you are. Most people have them. Almost no one talks about them.\n\nAnonymous thoughts about intrusive thoughts posted here are from people who needed to say out loud the kind of thing that minds generate without asking. No judgment. Just the honest acknowledgment that the mind is not always a safe or predictable place.`,
    keywords: ["intrusive thoughts confessions", "unwanted thoughts anonymous", "disturbing thoughts I have"],
    related: ["anxiety", "rumination", "shame", "dissociation", "overthinking"],
  },
  {
    slug: "rumination",
    title: "Rumination",
    description: "the thought that never finishes",
    shortIntro: "Running the same sequence until something gives.\nNothing gives.\nThe mental loop with no exit and no resolution.",
    intro: `Rumination is the repetitive return to the same thought, the same event, the same pain point — not to process it but to occupy it. You think about the thing again. You get no closer to a different outcome. You think about it again.\n\nAnonymous thoughts about rumination posted here are from people who know this particular mental architecture — the specific exhaustion of a loop that doesn't resolve, the thing that keeps running in the background of everything else.`,
    keywords: ["rumination thoughts anonymous", "can't stop replaying anonymous", "mental loop confessions"],
    related: ["overthinking", "anxiety", "intrusive-thoughts", "regret", "the-past"],
  },
  {
    slug: "catastrophizing",
    title: "Catastrophizing",
    description: "building the disaster before it arrives",
    shortIntro: "The mind that lives in the worst version of what hasn't happened.\nSurviving futures that never come.\nExhausted by events that were never real.",
    intro: `Catastrophizing is the anticipatory experience of disaster. Before the test results, before the difficult conversation, before the reply — the mind has already run the worst version all the way to its conclusion. You've survived the catastrophe several times before it happens. When it doesn't happen, you feel nothing but the residue of having survived it anyway.\n\nAnonymous thoughts about catastrophizing posted here are from people who live in the worst version of things that haven't happened — and what it's like to be exhausted by events that were never real.`,
    keywords: ["catastrophizing thoughts anonymous", "always expecting the worst", "anxiety catastrophizing confessions"],
    related: ["anxiety", "rumination", "hypervigilance", "overthinking", "fear"],
  },
  {
    slug: "nihilism",
    title: "Nihilism",
    description: "when the meaning question gets answered honestly",
    shortIntro: "The specific clarity that comes from seeing through everything.\nThe conclusion, not the disease.\nLiving after the framework collapsed and nothing replaced it.",
    intro: `Nihilism is not depression. It's a conclusion — the honest result of looking long enough at the question of meaning and not finding a satisfactory answer. For some people it arrives as relief. For others it arrives as the floor dropping out. The question is what you do with the view once you have it.\n\nAnonymous thoughts about nihilism posted here are from people who have seen through the framework — and the specific experience of trying to live in a way that doesn't require one.`,
    keywords: ["nihilism thoughts anonymous", "nothing matters confessions", "meaning collapse anonymous"],
    related: ["meaning", "purpose", "existential-dread", "emptiness", "impermanence"],
  },
  {
    slug: "existential-dread",
    title: "Existential Dread",
    description: "knowing too much and being unable to unknow it",
    shortIntro: "The background terror that has no specific object.\nThe horror of consciousness that sometimes surfaces and won't go back down.\nThe dread that belongs to existence itself.",
    intro: `Existential dread is not anxiety about a specific thing. It's the dread that belongs to consciousness itself — the awareness of being aware, the knowledge of finitude, the strangeness of existing at all. Most people manage it through routine and distraction. Sometimes the management fails.\n\nAnonymous thoughts about existential dread posted here are from people who have sat with the horror without finding the comfortable response — what it's like when the question surfaces and won't be redirected.`,
    keywords: ["existential dread thoughts anonymous", "terror of existence anonymous", "existential anxiety confessions"],
    related: ["nihilism", "mortality", "death", "meaning", "impermanence"],
  },
  {
    slug: "masculinity",
    title: "Masculinity",
    description: "what it costs to perform being a man",
    shortIntro: "The things said and unsaid inside the performance.\nThe version underneath that never gets to exist in a room.\nWho you are when the requirement drops.",
    intro: `Masculinity as performed is a set of requirements nobody fully meets and most people pretend to. The emotional constrictiveness, the specific shame of weakness, the things that can't be said in rooms where men perform being men. The full interior — frightened, tender, uncertain — is carefully managed.\n\nAnonymous thoughts about masculinity posted here are the version that doesn't make it into those rooms. What the performance costs, what it conceals, what exists underneath it.`,
    keywords: ["masculinity confessions anonymous", "being a man thoughts anonymous", "male emotional repression"],
    related: ["identity", "emotional-repression", "shame", "vulnerability", "emotional-labor"],
  },
  {
    slug: "femininity",
    title: "Femininity",
    description: "the performance nobody asked if you wanted to give",
    shortIntro: "The requirements that arrived before you could evaluate them.\nSoftness, accommodation, appearance — performed for rooms that enforce them.\nWho you are when the performance is finally off.",
    intro: `Femininity, as socially constructed, is a set of requirements delivered without consent. Softness, smallness, accommodation, emotional availability — performed for rooms that enforce them through subtle and not-so-subtle mechanisms. Most women are fluent in the performance. The question of who exists underneath it is something else entirely.\n\nAnonymous thoughts about femininity posted here are from people who have been performing since before they understood what the performance was — and what it's like to reckon with what they actually are versus what was required.`,
    keywords: ["femininity thoughts anonymous", "being a woman confessions", "gender performance anonymous"],
    related: ["identity", "shrinking", "people-pleasing", "the-performing-body", "shame"],
  },
  {
    slug: "religious-trauma",
    title: "Religious Trauma",
    description: "what was done to you in the name of god",
    shortIntro: "The damage that came wrapped in love and absolute truth.\nLearning that what you were taught and what is real are different things.\nRebuilding an interior from ground level.",
    intro: `Religious trauma is the specific wound of a framework that claimed total authority over your interior life. Not just what to believe but who you were, what you deserved, what happened to people like you. The damage is complicated because it often came from people who loved you, who believed what they were teaching, who thought they were protecting you.\n\nAnonymous thoughts about religious trauma posted here are from people living in the aftermath — the specific process of rebuilding an interior life when the original architecture was someone else's.`,
    keywords: ["religious trauma confessions anonymous", "church hurt anonymous", "spiritual abuse thoughts"],
    related: ["faith-loss", "deconstruction", "shame", "trauma", "inherited-trauma"],
  },
  {
    slug: "faith-loss",
    title: "Faith Loss",
    description: "when the framework that held everything collapses",
    shortIntro: "The specific grief of losing something that was supposed to be certain.\nA slow erosion, and then a morning when the belief is already gone.\nWhat you do with a life built on something that turned out not to be there.",
    intro: `Faith loss is not always dramatic. Sometimes it's a slow erosion — a series of questions that don't get satisfying answers, a gradual cooling, a morning when you realize the belief is already gone and you've been pretending for a while. It's one of the quieter griefs because you've lost something that wasn't supposed to be losable.\n\nAnonymous thoughts about faith loss posted here are from people navigating the aftermath — the community left behind, the moral framework that needed replacing, the specific loneliness of exiting a worldview.`,
    keywords: ["losing faith anonymous", "faith crisis confessions", "leaving religion thoughts"],
    related: ["religious-trauma", "deconstruction", "nihilism", "belonging", "meaning"],
  },
  {
    slug: "spiritual-bypassing",
    title: "Spiritual Bypassing",
    description: "using transcendence to avoid what's real",
    shortIntro: "The light and love that never quite touches the wound.\nHealed on the surface, unaddressed underneath.\nMeditation as a way of not having the difficult conversation.",
    intro: `Spiritual bypassing is the use of spiritual concepts and practices to avoid dealing with unresolved emotional wounds. The meditation that replaces the difficult conversation. The love and light that bypasses the anger. The forgiveness performed before anything has actually been processed. It looks like growth. It often isn't.\n\nAnonymous thoughts about spiritual bypassing posted here are from people who have used the spiritual dimension to avoid the human one — and what it's like when the bypass stops working.`,
    keywords: ["spiritual bypassing thoughts", "toxic positivity spiritual", "avoiding emotions with spirituality"],
    related: ["avoidance", "faith-loss", "emotional-repression", "healing", "magical-thinking"],
  },
  {
    slug: "cultural-displacement",
    title: "Cultural Displacement",
    description: "belonging to two worlds, fully to neither",
    shortIntro: "The hyphen between identities that doesn't let you rest in either.\nTranslating constantly, in every room, for everyone.\nThe exhaustion of existing between two cultures that each expect you to be primarily of the other.",
    intro: `Cultural displacement is the experience of existing between two cultures in a way that grants partial membership in each and full membership in neither. You know the rules of both worlds. You translate constantly — between languages, between behavioral codes, between versions of yourself. The translation is exhausting, mostly invisible, and rarely acknowledged.\n\nAnonymous thoughts about cultural displacement posted here are from people who are always translating — the honest account of being between worlds that each see you as belonging to the other.`,
    keywords: ["cultural identity thoughts anonymous", "third culture kid confessions", "immigrant identity anonymous"],
    related: ["belonging", "identity", "class-shame", "loneliness", "being-misunderstood"],
  },
  {
    slug: "class-shame",
    title: "Class Shame",
    description: "carrying the identity of where you came from",
    shortIntro: "The ways the accent and the table manners and the references still show.\nThe version of yourself you try to upgrade and can never quite leave.\nAchievement that doesn't erase the origin.",
    intro: `Class shame is the specific weight of knowing that where you come from is legible in ways you can't fully control — the way you speak, what you don't know, the references you miss, the things your background got wrong about how the world works. It persists through achievement. Some people spend a lifetime trying to exit an identity that follows them everywhere.\n\nAnonymous thoughts about class shame posted here are the honest account of carrying a background that the new room doesn't recognize — or recognizes too well.`,
    keywords: ["class shame thoughts anonymous", "working class identity confessions", "class anxiety anonymous"],
    related: ["shame", "identity", "belonging", "overachievement", "imposter-syndrome"],
  },
  {
    slug: "deconstruction",
    title: "Deconstruction",
    description: "dismantling the belief you were built on",
    shortIntro: "The slow unwinding of everything that seemed certain.\nNot just ideas — the structure everything else was built on.\nWho you are when the original architecture is gone.",
    intro: `Deconstruction is the process of examining beliefs that were previously unexamined — often religious, sometimes political, sometimes familial — and finding they don't survive scrutiny. Those beliefs weren't just ideas; they were the structure everything else was built on. When they go, everything they supported has to be rebuilt.\n\nAnonymous thoughts about deconstruction posted here are from people in the middle of that rebuilding — what it's like to lose certainty and have to construct a self from unfamiliar materials.`,
    keywords: ["deconstruction confessions", "leaving faith anonymous", "belief system collapse thoughts"],
    related: ["faith-loss", "religious-trauma", "nihilism", "identity", "change"],
  },

  // ── NEW TOPICS 26–50 ──────────────────────────────────────────────────────
  {
    slug: "obsession",
    title: "Obsession",
    description: "when someone becomes the only thought",
    shortIntro: "The mind that can't locate a version of reality without them in it.\nInvoluntary, compulsive, and entirely indifferent to reason.\nThe specific madness of being colonized by a person.",
    intro: `Obsession is different from love, though it contains love's shape. It's the inability to locate attention elsewhere — the return, compulsive and involuntary, to one thought, one person, one scenario. It doesn't respond to reason. Knowing it's disproportionate doesn't diminish it.\n\nAnonymous thoughts about obsession posted here are from people who have been inside this — the honest account of what it's like when someone becomes the organizing principle of your mind, regardless of whether they deserve to be there.`,
    keywords: ["obsession thoughts anonymous", "obsessive love confessions", "can't stop thinking about someone"],
    related: ["unrequited-love", "rumination", "intrusive-thoughts", "attachment-wound", "desire"],
  },
  {
    slug: "estrangement",
    title: "Estrangement",
    description: "the family relationship that ended quietly",
    shortIntro: "The number you stopped calling and the reason you stopped.\nThe decision that looks cruel from the outside and feels like survival from the inside.\nCutting the cord and living with the cut.",
    intro: `Estrangement from family is one of the most stigmatized decisions a person can make — and one of the most necessary ones for many people. The social script is about reconciliation. The private reality is often about survival. Choosing distance comes with its own grief, its own questioning, its own slow adjustment to a life without the structure that was supposed to be permanent.\n\nAnonymous thoughts about estrangement posted here are from people who made the choice and live with it — the honest account of what the separation costs and what it gives back.`,
    keywords: ["family estrangement thoughts anonymous", "cutting off family confessions", "estranged from parents anonymous"],
    related: ["family", "parents", "living-grief", "resentment", "forgiveness"],
  },
  {
    slug: "living-grief",
    title: "The Living Grief",
    description: "mourning someone who is still alive",
    shortIntro: "The grief that has no funeral and no social permission.\nLosing a person who continues to exist without you.\nNo ceremony. No one brings food.",
    intro: `The living grief is the mourning of someone who hasn't died — a parent you've cut contact with, a friend who became a stranger, a version of someone you loved who no longer exists in the same form. The loss is real. The social structure for processing it is almost entirely absent.\n\nAnonymous thoughts about the living grief posted here are from people carrying a loss that has no official name — the honest account of grieving someone who continues to exist, just not in your life.`,
    keywords: ["grieving someone alive anonymous", "living grief confessions", "losing someone who didn't die"],
    related: ["estrangement", "grief", "loss", "heartbreak", "forgiveness"],
  },
  {
    slug: "emotional-dependence",
    title: "Emotional Dependence",
    description: "needing someone more than is safe",
    shortIntro: "The self that only fully exists in relation to one person.\nOrganizing your emotional life around someone else's presence.\nWhat happens to you when they're not there.",
    intro: `Emotional dependence is the experience of having organized your emotional life around one person to the degree that their absence constitutes a kind of crisis. It's different from love, though love is often involved. It's the inability to fully function as yourself without them as context.\n\nAnonymous thoughts about emotional dependence posted here are the honest account of needing someone in ways that are hard to say out loud — and what it reveals about the self that was there before them.`,
    keywords: ["emotional dependence confessions", "can't function without them anonymous", "relationship dependency thoughts"],
    related: ["codependency", "attachment-wound", "love", "obsession", "identity"],
  },
  {
    slug: "absent-father",
    title: "Absent Father",
    description: "the gap shaped entirely by who was never there",
    shortIntro: "Growing up around an absence that was also a presence.\nWhat the missing person teaches you about what you are.\nThe foundational gap that follows you into every room.",
    intro: `An absent father is not just a missing parent. It's a foundational absence that shapes the architecture of everything that follows — how you understand yourself, what you believe you deserve, what you look for in other people. The absence is not neutral. It teaches things.\n\nAnonymous thoughts about the absent father posted here are from people who grew up with that specific gap — the honest account of what it shaped and what it cost and what questions it left permanently open.`,
    keywords: ["absent father thoughts anonymous", "fatherless confessions", "father wound anonymous"],
    related: ["family", "parents", "attachment-wound", "unchosen-role", "inherited-trauma"],
  },
  {
    slug: "conditional-love",
    title: "Conditional Love",
    description: "the love that came with requirements",
    shortIntro: "Being loved for performance, not for existing.\nThe love available when the conditions were met and withdrawn when they weren't.\nWhat you learned about yourself when you failed to meet them.",
    intro: `Conditional love teaches you that you are valuable for what you do, not for what you are. The conditions may be explicit or unspoken, but they're felt. The child who is loved when they succeed, tolerated when they fail. The self that learns early that love must be earned and can be withdrawn.\n\nAnonymous thoughts about conditional love posted here are from people unlearning the version of love they were given first — the honest account of what it taught them and how it follows them.`,
    keywords: ["conditional love thoughts anonymous", "love with conditions confessions", "earn love anonymous"],
    related: ["parents", "family", "attachment-wound", "self-worth", "the-good-child"],
  },
  {
    slug: "emotional-abuse",
    title: "Emotional Abuse",
    description: "what happened that didn't leave marks",
    shortIntro: "The damage that lived in tone and denial and isolation.\nHard to name because nothing was technically done.\nThe accumulation of small things that wasn't small.",
    intro: `Emotional abuse is the most invisible form because it has no physical evidence. It lives in the chronic undermining, the gaslighting, the isolation, the contempt, the punishment through silence. It's easy to dismiss because every individual incident seems small. The cumulative effect is not small.\n\nAnonymous thoughts about emotional abuse posted here are from people who spent time in relationships that told them they were the problem — the honest account of recognizing what it was and what it cost.`,
    keywords: ["emotional abuse confessions anonymous", "psychological abuse thoughts", "invisible abuse anonymous"],
    related: ["narcissistic-relationship", "shame", "trauma", "trust", "emotional-withholding"],
  },
  {
    slug: "narcissistic-relationship",
    title: "Narcissistic Relationship",
    description: "surviving someone who only ever saw themselves",
    shortIntro: "The specific exhaustion of being a mirror for someone else's reality.\nYour perspective, your needs, your truth — systematically subordinated.\nWhat's left of you when you finally leave.",
    intro: `A relationship with a narcissist is one in which your perspective, your needs, your reality are systematically subordinated to one person's version of events. It's often not recognized until after, when the patterns are legible from a distance. While inside, you are managing, accommodating, and slowly losing track of what you actually think.\n\nAnonymous thoughts about narcissistic relationships posted here are from people who have emerged — and the specific process of reconstructing a self that was gradually dismantled.`,
    keywords: ["narcissistic relationship confessions anonymous", "surviving narcissism anonymous", "narcissist partner thoughts"],
    related: ["emotional-abuse", "betrayal", "trust", "identity", "emotional-withholding"],
  },
  {
    slug: "enmeshment",
    title: "Enmeshment",
    description: "not knowing where you end and they begin",
    shortIntro: "The family where everyone's feelings are everyone's responsibility.\nBoundaries so diffuse that individual identity becomes hard to locate.\nLearning to be a self inside a system that never allowed separation.",
    intro: `Enmeshment is the relational condition in which boundaries between people are so diffuse that individual identity becomes difficult to locate. Your feelings are their feelings. Their problems are your problems. It often looks like closeness. It functions as a loss of self.\n\nAnonymous thoughts about enmeshment posted here are from people who grew up in systems where individuation was threatening — and the specific difficulty of learning to be a self when that was never the point.`,
    keywords: ["enmeshment family thoughts", "no boundaries family confessions", "losing yourself in family anonymous"],
    related: ["family", "codependency", "people-pleasing", "identity", "conditional-love"],
  },
  {
    slug: "toxic-loyalty",
    title: "Toxic Loyalty",
    description: "staying when everything in you says leave",
    shortIntro: "The loyalty that long outlived the thing that earned it.\nLove as a reason to accept what shouldn't be accepted.\nStaying because leaving would mean admitting what it was.",
    intro: `Toxic loyalty is what happens when the commitment to a person or institution outlasts any reasonable justification for it. The family you stay in contact with despite what it costs you. The relationship you maintain despite the evidence. The loyalty is real. The thing it's protecting may no longer deserve it.\n\nAnonymous thoughts about toxic loyalty posted here are the honest account of staying — and what it takes to eventually leave, or what it costs to remain.`,
    keywords: ["toxic loyalty confessions", "staying too long in relationship", "loyal to a fault anonymous"],
    related: ["estrangement", "resentment", "trust", "codependency", "attachment-wound"],
  },
  {
    slug: "attachment-wound",
    title: "Attachment Wound",
    description: "why you love the way you do",
    shortIntro: "The early pattern that became your blueprint.\nFormed before language, enacted in every relationship since.\nThe version of love you keep rebuilding from the first template.",
    intro: `Attachment wounds develop early, in the first relationships where you learned what love looked and felt like. Anxious attachment, avoidant, disorganized — the names matter less than the experience: the pattern of connecting that was formed before you had language for it, that you've been enacting in every relationship since.\n\nAnonymous thoughts about attachment wounds posted here are from people recognizing the pattern in real time — what the wound is, where it came from, and the very specific difficulty of wanting to connect differently than you were taught.`,
    keywords: ["attachment wound confessions", "attachment style anonymous", "why I love like this"],
    related: ["codependency", "emotional-dependence", "parents", "childhood", "relationships"],
  },
  {
    slug: "caregiver-exhaustion",
    title: "Caregiver Exhaustion",
    description: "loving someone until nothing is left",
    shortIntro: "The depletion that comes from sustained, unreciprocated care.\nThe resentment that arrives alongside the love and isn't safe to name.\nWhat happens to the self that gives without refilling.",
    intro: `Caregiver exhaustion is the specific burnout of sustained caregiving — for a sick parent, a struggling partner, a child with high needs. The care is real and meaningful. So is the cost. The self that exists outside the caregiving role gradually becomes inaccessible. The resentment that arrives alongside the love is rarely safe to name.\n\nAnonymous thoughts about caregiver exhaustion posted here are from people who love someone and are running out — the honest account of what giving this much actually costs.`,
    keywords: ["caregiver burnout confessions", "caring for someone anonymous", "caregiver exhaustion thoughts"],
    related: ["burnout", "resentment", "overcaring", "emotional-labor", "codependency"],
  },
  {
    slug: "inherited-trauma",
    title: "Inherited Trauma",
    description: "carrying what your family couldn't process",
    shortIntro: "The wound that was never yours but arrived anyway.\nPatterns installed before you knew they were patterns.\nTracking something backward through a family tree.",
    intro: `Inherited trauma is the transmission of unprocessed emotional experience across generations. The parent who never dealt with their own wound, who passed it forward in behavior, in silence, in the specific way they related to you. You didn't create it. It arrived fully formed and arranged itself as the architecture of your interior life.\n\nAnonymous thoughts about inherited trauma posted here are from people tracking the origin of patterns that feel native but aren't — the honest account of carrying something backward through the family.`,
    keywords: ["inherited trauma thoughts anonymous", "generational trauma confessions", "family patterns anonymous"],
    related: ["trauma", "parents", "childhood", "emotional-repression", "family"],
  },
  {
    slug: "validation-hunger",
    title: "Validation Hunger",
    description: "needing proof from outside that you exist",
    shortIntro: "The specific hunger for someone to confirm what you can't confirm alone.\nAn external verdict required before the internal one can land.\nWhat it's like to need an audience for your own reality.",
    intro: `Validation hunger is the experience of being unable to trust your own perception, your own worth, your own reality without external confirmation. It develops in environments where your perspective wasn't trusted or your value wasn't assumed. The result is a self that needs constant input from outside to feel real.\n\nAnonymous thoughts about validation hunger posted here are from people who recognize the pattern — the honest account of what it's like to need to be told you're real, and what it costs to keep needing it.`,
    keywords: ["validation seeking thoughts anonymous", "need approval confessions", "external validation anonymous"],
    related: ["people-pleasing", "approval-addiction", "self-worth", "shame", "identity"],
  },
  {
    slug: "fear-of-success",
    title: "Fear of Success",
    description: "the self-sabotage before the arrival",
    shortIntro: "Getting close to what you want and finding a way to undo it.\nThe specific dread of becoming what you've been working toward.\nThe protection that looks like failure from the outside.",
    intro: `Fear of success is real, though it sounds paradoxical. It's the fear of what success will require — the visibility, the scrutiny, the distance from who you've been, the possibility of failing publicly from a higher altitude. So you undermine. You pause. The thing almost arrives and something happens.\n\nAnonymous thoughts about fear of success posted here are from people who have recognized the pattern — sabotaging the very thing they've worked for — and the honest account of what the arrival actually threatens.`,
    keywords: ["fear of success confessions", "self-sabotage before success", "afraid to succeed anonymous"],
    related: ["self-destruction", "imposter-syndrome", "procrastination", "ambition", "overachievement"],
  },
  {
    slug: "fear-of-happiness",
    title: "Fear of Happiness",
    description: "the dread that comes when things go well",
    shortIntro: "Waiting for the cost of feeling good.\nThe superstition that acknowledging the good will undo it.\nThe body that learned happiness is the thing before the fall.",
    intro: `Fear of happiness is the specific anxiety that activates when things are going well. The waiting for the other shoe. The inability to let yourself fully inhabit a good period because something learned, very early, that good things are followed by loss.\n\nAnonymous thoughts about fear of happiness posted here are from people who can't fully inhabit the good — the honest account of the vigilance that arrives when the threat is gone.`,
    keywords: ["fear of happiness thoughts anonymous", "can't enjoy good things anonymous", "happiness anxiety confessions"],
    related: ["anxiety", "hypervigilance", "fear-of-success", "hope", "trauma"],
  },
  {
    slug: "overachievement",
    title: "Overachievement",
    description: "doing too much to prove you deserve to be here",
    shortIntro: "The accomplishment that doesn't satisfy because it was never about the accomplishment.\nMore credentials, more output, more evidence — each one temporarily quieting the question.\nRunning a race that was never the race you thought it was.",
    intro: `Overachievement is achievement in service of something other than the achievement. It's the proof. The defense against the internal verdict that without performance, the self is insufficient. More credentials, more output — each one temporarily quieting the underlying question without answering it.\n\nAnonymous thoughts about overachievement posted here are from people who have built the impressive structure and then sat in it alone — the honest account of what all that effort was actually trying to solve.`,
    keywords: ["overachiever confessions anonymous", "achievement addiction thoughts", "proving myself anonymous"],
    related: ["imposter-syndrome", "validation-hunger", "fear-of-success", "burnout", "self-worth"],
  },
  {
    slug: "chronic-underachievement",
    title: "Chronic Underachievement",
    description: "living deliberately below your potential",
    shortIntro: "Knowing what you could do and choosing not to.\nThe safety in never being measured against what you might have been.\nProtecting the might-have-been by never testing it.",
    intro: `Chronic underachievement is rarely about laziness. It's often about protection — the protection of an unexplored potential that remains intact as long as you never test it. If you try and fail, you've lost the might-have-been. If you never try, the possibility survives. It's a specific form of fear, and it's expensive.\n\nAnonymous thoughts about chronic underachievement posted here are from people who recognize the architecture of their own ceiling — the honest account of what keeps the might-have-been safely unreachable.`,
    keywords: ["underachievement confessions anonymous", "not living up to potential", "fear of trying thoughts"],
    related: ["fear-of-success", "procrastination", "avoidance", "self-doubt", "the-dream-you-gave-up"],
  },
  {
    slug: "ambition",
    title: "Ambition",
    description: "wanting more than you're supposed to admit",
    shortIntro: "The hunger that doesn't fit the version of yourself you present.\nEdited up or down depending on the audience.\nThe actual drive toward something specific, examined honestly.",
    intro: `Ambition is one of the emotions people perform rather than acknowledge — edited up or down depending on the room. Too much ambition is unattractive, presumptuous, aggressive. Too little is unfocused, unserious. The actual experience of wanting — the genuine drive toward something specific — rarely gets examined honestly.\n\nAnonymous thoughts about ambition posted here are the unedited version. The honest account of what you want, how much you want it, and the specific weight of wanting in ways that don't fit the acceptable register.`,
    keywords: ["ambition confessions anonymous", "wanting more thoughts", "ambitious and ashamed anonymous"],
    related: ["overachievement", "fear-of-success", "comparison", "success", "validation-hunger"],
  },
  {
    slug: "procrastination",
    title: "Procrastination",
    description: "the avoidance that costs you what you want",
    shortIntro: "Delaying the thing that matters while doing everything else.\nFear of failure with a very full schedule.\nIf you don't start, you can't fail.",
    intro: `Procrastination on things that matter is almost never about time management. It's about the emotional cost of engaging with the thing. Fear of failure. Fear of it not being what you hoped. Fear of committing to an attempt that might not succeed. The avoidance is rational in its own logic.\n\nAnonymous thoughts about procrastination posted here are from people inside the loop — the honest account of delaying the thing that matters most and what it means to be aware of doing it.`,
    keywords: ["procrastination confessions anonymous", "can't start the thing anonymous", "delayed life thoughts"],
    related: ["avoidance", "fear-of-success", "creative-block", "self-destruction", "perfectionism"],
  },
  {
    slug: "creative-block",
    title: "Creative Block",
    description: "when the thing you love stops responding",
    shortIntro: "The silence where the work used to be.\nCreating nothing while being nothing but a person who creates.\nThe specific grief of losing access to the thing that makes life make sense.",
    intro: `Creative block is not the absence of ideas. It's the inability to engage with the creative process in a way that produces anything you can tolerate. The ideas are there. The execution feels impossible. Or the ideas aren't there, and the silence where they usually live is the loudest thing in the room.\n\nAnonymous thoughts about creative block posted here are from people who make things and have temporarily lost the ability — the honest account of the silence and the self-doubt that fills it.`,
    keywords: ["creative block confessions anonymous", "can't create anymore thoughts", "artist block anonymous"],
    related: ["perfectionism", "procrastination", "self-doubt", "burnout", "purpose"],
  },
  {
    slug: "the-dream-you-gave-up",
    title: "The Dream You Gave Up",
    description: "what you stopped reaching for",
    shortIntro: "The version of your life that required something you couldn't sustain.\nNot fully mourned, not fully released, occasionally visited.\nWho you might have been and who you became instead.",
    intro: `The dream you gave up occupies a specific space in the interior life — not fully mourned, not fully released, occasionally visited. You made the practical choice. You were probably right. The dream still sits there, asking whether you were.\n\nAnonymous thoughts about the dream you gave up posted here are from people who made the choice and still carry the weight of the alternative — the honest account of what you stopped reaching for and what it means that you stopped.`,
    keywords: ["gave up on dreams confessions", "abandoned dream thoughts anonymous", "what I could have been"],
    related: ["regret", "the-unlived-life", "parallel-lives", "ambition", "purpose"],
  },
  {
    slug: "approval-addiction",
    title: "Approval Addiction",
    description: "needing someone else's verdict to feel real",
    shortIntro: "Organizing your life around the response you haven't received yet.\nThe approval that arrives, briefly satisfies, and then the need rebuilds.\nChasing a verdict that keeps moving.",
    intro: `Approval addiction is the chronic need for external confirmation that you are okay, that you are good, that what you did was right. The approval arrives, briefly satisfies, and then the need rebuilds. No amount of approval resolves the underlying question because that question is not about what others think — it's about what you think of yourself.\n\nAnonymous thoughts about approval addiction posted here are from people who recognize the cycle — the honest account of chasing a verdict that keeps moving.`,
    keywords: ["approval seeking confessions", "addicted to validation anonymous", "need others approval thoughts"],
    related: ["validation-hunger", "people-pleasing", "self-worth", "comparison", "shame"],
  },
  {
    slug: "false-memory",
    title: "False Memory",
    description: "what you remember that didn't happen that way",
    shortIntro: "The past that's partly real and partly what you needed it to be.\nMemory as reconstruction, not recording.\nThe version that has become more true than what actually occurred.",
    intro: `Memory is not a recording. It's a reconstruction — influenced by subsequent experience, emotional state, the stories you've been told, what you needed to believe. False memories are not lies. They're the natural result of the mind's editing process. The past you remember is real to you. It may not match anyone else's version.\n\nAnonymous thoughts about false memory posted here are from people who have confronted the gap between what they remember and what appears to have happened — the honest account of a past that isn't entirely reliable.`,
    keywords: ["false memory thoughts anonymous", "memory unreliable confessions", "misremembering the past"],
    related: ["the-past", "nostalgia", "childhood", "trauma", "being-misunderstood"],
  },
  {
    slug: "before-after",
    title: "The Before/After",
    description: "the moment that split your life in two",
    shortIntro: "Everything that was and everything that came after.\nA dividing line clear enough to name.\nLiving in a story with a before and an after and no way back.",
    intro: `Some people can identify the exact moment their life became something different. A diagnosis. A death. A conversation. A discovery. Before it, one life. After it, another. The two are not continuous — they connect, but the person in the after is not the same as the person in the before.\n\nAnonymous thoughts about the before/after posted here are from people who live in the after — the honest account of what it's like to have a clear demarcation in your own story.`,
    keywords: ["life before and after confessions", "event that changed everything anonymous", "defining moment thoughts"],
    related: ["trauma", "grief", "change", "the-past", "loss"],
  },

  // ── NEW TOPICS 51–75 ──────────────────────────────────────────────────────
  {
    slug: "parallel-lives",
    title: "Parallel Lives",
    description: "the versions of yourself you can't stop imagining",
    shortIntro: "The path not taken and who you'd be at the end of it.\nBranching off at every choice you didn't make.\nHaunted by a life that exists only as a question.",
    intro: `Parallel lives are the other versions — the ones that branched off at the choice you didn't make, the relationship you didn't pursue, the city you didn't move to. They don't exist, but they occupy real psychological space. The person who took a different job is somewhere out there, living a version of your life that you occasionally check in on.\n\nAnonymous thoughts about parallel lives posted here are from people who can't stop inhabiting the alternative — the honest account of being haunted by a life that only exists as a what-if.`,
    keywords: ["alternate life thoughts anonymous", "path not taken confessions", "what if life anonymous"],
    related: ["regret", "the-dream-you-gave-up", "the-unlived-life", "nostalgia", "before-after"],
  },
  {
    slug: "survivors-guilt",
    title: "Survivor's Guilt",
    description: "being fine when the people around you aren't",
    shortIntro: "The discomfort of making it through when others didn't.\nThe specific weight of having been spared.\nSurvival and the guilt that arrives alongside it.",
    intro: `Survivor's guilt is the uncomfortable awareness of having come through something — illness, accident, poverty, a system designed to harm people like you — when others didn't. The survival is real and the guilt alongside it is also real. The two coexist in ways that don't resolve easily.\n\nAnonymous thoughts about survivor's guilt posted here are from people on the other side of something they weren't sure they'd survive — and the specific difficulty of inhabiting that position honestly.`,
    keywords: ["survivor's guilt confessions anonymous", "guilt for surviving thoughts", "why me and not them"],
    related: ["grief", "guilt", "loss", "trauma", "shame"],
  },
  {
    slug: "anticipatory-grief",
    title: "Anticipatory Grief",
    description: "mourning before the loss actually arrives",
    shortIntro: "Grieving someone who is still here.\nThe specific dread of a goodbye you already know is coming.\nThe grief that is real before the event — and then real again after.",
    intro: `Anticipatory grief is the grief that arrives in advance — when the loss is coming but hasn't arrived. The terminal diagnosis. The relationship ending in slow motion. The parent whose mind is leaving before their body does. The grief is real before the event. The event, when it comes, is then grieved again.\n\nAnonymous thoughts about anticipatory grief posted here are from people already mourning something they still have — the honest account of grieving in advance and what it does to the time that remains.`,
    keywords: ["anticipatory grief thoughts anonymous", "dreading a loss anonymous", "grieving before the end"],
    related: ["grief", "loss", "death", "caregiver-exhaustion", "living-grief"],
  },
  {
    slug: "productivity-shame",
    title: "Productivity Shame",
    description: "the guilt of not being constantly useful",
    shortIntro: "Rest as moral failure.\nThe interior voice that counts your output and finds you lacking.\nA culture that measures worth through output, internalized.",
    intro: `Productivity shame is the specific guilt that arrives when you are not being productive — the resting, the wandering, the enjoyment that doesn't have an output. In a culture that measures worth through output, rest carries a charge of moral failure. You should be doing something. The something is never finished.\n\nAnonymous thoughts about productivity shame posted here are from people who can't stop counting — the honest account of a relationship to work and rest that doesn't allow for either.`,
    keywords: ["productivity shame confessions", "guilt for resting anonymous", "always working thoughts"],
    related: ["hustle-culture", "rest-anxiety", "burnout", "work", "self-worth"],
  },
  {
    slug: "rest-anxiety",
    title: "Rest Anxiety",
    description: "the inability to stop without punishing yourself",
    shortIntro: "Vacation as its own form of stress.\nThe body that has been running on urgency for so long that stillness feels like malfunction.\nLearning to stop — and what the stopping reveals.",
    intro: `Rest anxiety is the activation that comes with not being productive. The vacation that generates its own stress. The quiet Sunday that the mind won't allow to be quiet. The body that has been running on urgency for so long that rest doesn't feel like rest — it feels like something is wrong.\n\nAnonymous thoughts about rest anxiety posted here are from people who can't stop — the honest account of a nervous system that has forgotten how to let the emergency be over.`,
    keywords: ["rest anxiety thoughts anonymous", "can't relax confessions", "vacation anxiety anonymous"],
    related: ["burnout", "productivity-shame", "hustle-culture", "hypervigilance", "anxiety"],
  },
  {
    slug: "sunday-dread",
    title: "Sunday Dread",
    description: "what lands the evening before it starts again",
    shortIntro: "The specific heaviness of a day that knows what comes next.\nThe future arriving in your body before it arrives in the calendar.\nSomething is wrong with your week. Sunday knows it before you do.",
    intro: `Sunday dread is the anticipatory anxiety of Monday — which is to say, the anticipatory anxiety of the life you're living, arriving in your body the evening before you have to go back to it. It's one of the most widely experienced and least discussed forms of low-grade suffering.\n\nAnonymous thoughts about Sunday dread posted here are from people who have learned to read their own dread as information — the honest account of what the body announces before the mind admits it.`,
    keywords: ["sunday dread thoughts anonymous", "anxiety before monday confessions", "dreading the week anonymous"],
    related: ["work", "burnout", "rest-anxiety", "hustle-culture", "direction"],
  },
  {
    slug: "hustle-culture",
    title: "Hustle Culture",
    description: "what grinding costs against what it promises",
    shortIntro: "The identity built on output and the self beneath it.\nThe grind as the path to a future that keeps receding.\nAmbition as a way of avoiding your life.",
    intro: `Hustle culture promises that sufficient effort will produce a sufficient life. The output justifies the cost. What it doesn't account for is the self being ground away in the process — the relationships deferred, the body neglected, the life observed from a position of constant preparation for a future that keeps receding.\n\nAnonymous thoughts about hustle culture posted here are from people who bought in and paid the price — the honest account of what the grind actually produces.`,
    keywords: ["hustle culture confessions anonymous", "burnout from grinding thoughts", "overworking life anonymous"],
    related: ["burnout", "productivity-shame", "ambition", "work", "rest-anxiety"],
  },
  {
    slug: "chronic-boredom",
    title: "Chronic Boredom",
    description: "the restlessness nothing seems to satisfy",
    shortIntro: "The persistent feeling that nothing fully engages you.\nThe scroll, the stimulation, the movement — none of it lands.\nBoredom as information about a larger disconnection.",
    intro: `Chronic boredom is not the same as having nothing to do. It's the persistent feeling that nothing, including the things you do, fully engages you. The scroll, the stimulation, the movement from one thing to the next — none of it lands. Something is not connecting, and the boredom is its signal.\n\nAnonymous thoughts about chronic boredom posted here are from people who can't find the thing that makes the days feel like they matter — the honest account of the restlessness underneath everything.`,
    keywords: ["chronic boredom confessions", "nothing interests me anymore", "bored with life anonymous"],
    related: ["emptiness", "depression", "purpose", "meaning", "direction"],
  },
  {
    slug: "body-dysmorphia",
    title: "Body Dysmorphia",
    description: "seeing something other than what's there",
    shortIntro: "The mirror that shows a version nobody else can see.\nA perceptual distortion that generates real suffering.\nThe body that is the enemy you live inside.",
    intro: `Body dysmorphia is the experience of perceiving your body — or a part of it — as fundamentally wrong in a way that doesn't match external reality. It's not vanity. It's a perceptual distortion that generates real suffering. The person you see in the mirror is not the person others see. The gap between those two versions is where you live.\n\nAnonymous thoughts about body dysmorphia posted here are from people living in that gap — the honest account of a perception that can't be reasoned with.`,
    keywords: ["body dysmorphia confessions anonymous", "hating how I look anonymous", "body image disorder thoughts"],
    related: ["body", "shame", "the-performing-body", "disordered-eating", "comparison"],
  },
  {
    slug: "chronic-illness",
    title: "Chronic Illness",
    description: "living in a body that works against you",
    shortIntro: "The self organized around what the body can and cannot do.\nThe life that has to be rebuilt around the condition.\nGrief that is ongoing, adaptation that is ongoing, neither ever complete.",
    intro: `Chronic illness is a relationship — with a body that doesn't behave predictably, with a life that has to be planned around unpredictability, with a self that existed before the illness and may never fully exist in that form again. The grief is ongoing. The adaptation is ongoing. Neither is ever fully complete.\n\nAnonymous thoughts about chronic illness posted here are from people navigating this ongoing negotiation — the honest account of living inside a body that requires constant management.`,
    keywords: ["chronic illness thoughts anonymous", "living with illness confessions", "sick and invisible anonymous"],
    related: ["body", "invisible-illness", "grief", "loss", "exhaustion"],
  },
  {
    slug: "invisible-illness",
    title: "Invisible Illness",
    description: "suffering in ways that don't show",
    shortIntro: "Looking fine while experiencing something entirely different.\nYou look fine. You are frequently told you look fine.\nThe gap between external presentation and internal reality.",
    intro: `Invisible illness is the experience of managing a condition that leaves no visible evidence — mental illness, chronic pain, autoimmune disease — in a world that tends to believe what it can see. You look fine. The looking fine is a project that costs significant energy.\n\nAnonymous thoughts about invisible illness posted here are from people doing the constant translation between what's happening internally and what can be said externally — the honest account of not being believed.`,
    keywords: ["invisible illness confessions anonymous", "hidden chronic illness thoughts", "you look fine but I'm not"],
    related: ["chronic-illness", "shame", "being-misunderstood", "the-unwitnessed", "exhaustion"],
  },
  {
    slug: "disordered-eating",
    title: "Disordered Eating",
    description: "the relationship with food nobody names honestly",
    shortIntro: "Control, punishment, comfort, performance — all through eating.\nThe daily ritual that has nothing and everything to do with food.\nThe spectrum wider than the named disorders.",
    intro: `Disordered eating exists in a wide spectrum — from the diagnosed eating disorders to the more invisible patterns of restriction, compensating, bingeing, and obsessing that don't have official names but run as background noise through many people's days. It's rarely about food. It's about control, or the absence of it.\n\nAnonymous thoughts about disordered eating posted here are from people in the middle of this — the honest account of a relationship with food that has become about much more than food.`,
    keywords: ["disordered eating confessions anonymous", "unhealthy relationship with food thoughts", "eating disorder anonymous"],
    related: ["body", "control", "shame", "perfectionism", "body-dysmorphia"],
  },
  {
    slug: "social-exhaustion",
    title: "Social Exhaustion",
    description: "what being around people actually costs",
    shortIntro: "The depletion that follows the performance of presence.\nThe relief of a cancelled plan and what that reveals.\nThe maintenance of the social self and what it runs on.",
    intro: `Social exhaustion is the depletion that comes from sustained social performance — not necessarily from disliking people, but from the energy cost of being in a room. The maintenance of the social self. The reading of rooms, management of impressions, performance of appropriate responses. Most people are more susceptible than they admit.\n\nAnonymous thoughts about social exhaustion posted here are from people who need to say what social interaction actually costs them — and the specific relief that comes from being alone.`,
    keywords: ["social exhaustion confessions anonymous", "drained by people thoughts", "introvert exhaustion anonymous"],
    related: ["people-pleasing", "loneliness", "belonging", "avoidance", "connection"],
  },
  {
    slug: "small-talk",
    title: "Small Talk",
    description: "the performance of saying nothing",
    shortIntro: "The exchange of content that communicates only availability.\nThe enormous effort required to say very little.\nYou can maintain it indefinitely while feeling completely alone.",
    intro: `Small talk is the social technology for being present without being vulnerable. It communicates willingness to engage while preventing actual engagement. It's exhausting for people who don't find it instinctive and alienating for people who need more than it offers. The loneliness of small talk is that you can maintain it indefinitely while feeling completely alone.\n\nAnonymous thoughts about small talk posted here are from people who find the performance costly — the honest account of what it's like to move through social surfaces that never open.`,
    keywords: ["small talk exhaustion thoughts", "hate small talk anonymous", "social surface confessions"],
    related: ["social-exhaustion", "connection", "intellectual-loneliness", "loneliness", "being-misunderstood"],
  },
  {
    slug: "being-misunderstood",
    title: "Being Misunderstood",
    description: "the gap between who you are and who they see",
    shortIntro: "Saying the true thing and watching it land as something else.\nThe loneliness of an interior nobody quite receives correctly.\nYou correct. You explain. The version persists.",
    intro: `Being misunderstood is one of the more persistent forms of loneliness — the experience of saying what you mean and having it received differently, of being read as something you're not, of having the version of you in someone else's mind be so far from the actual thing.\n\nAnonymous thoughts about being misunderstood posted here are from people who have mostly stopped trying to correct it — the honest account of moving through the world as a misread thing.`,
    keywords: ["being misunderstood confessions anonymous", "nobody gets me thoughts", "misread by everyone anonymous"],
    related: ["connection", "loneliness", "belonging", "intellectual-loneliness", "identity"],
  },
  {
    slug: "the-unspoken-thing",
    title: "The Unspoken Thing",
    description: "what lives between two people, never said",
    shortIntro: "The truth that would change everything and so is never spoken.\nThe silence that becomes a third presence in the room.\nWhat both people are aware of and neither names.",
    intro: `Every relationship has an unspoken thing — sometimes several. The observation that isn't made. The question that isn't asked. The feeling that both people are aware of and neither names. It sits in the space between people, exerting pressure on everything around it without ever being addressed directly.\n\nAnonymous thoughts about the unspoken thing posted here are from people who carry something that has never been said to the person it concerns — the honest account of what it costs to maintain the silence.`,
    keywords: ["unspoken things in relationships anonymous", "things I never said confessions", "unsaid truth thoughts"],
    related: ["avoidance", "the-unfinished-conversation", "secrets", "the-apology-that-never-came", "vulnerability"],
  },
  {
    slug: "oversharing",
    title: "Oversharing",
    description: "the impulse to be known at any cost",
    shortIntro: "Saying too much too fast because the loneliness is immediate.\nConfession as compulsion rather than choice.\nThe need for connection so urgent it skips the steps that make it safe.",
    intro: `Oversharing is the impulse to be known that bypasses the usual social scaffolding — to tell too much too soon, to say the true thing before the relationship has built the container for it. It's often loneliness expressed as urgency. The need for connection so immediate that it skips the steps that would make it safe.\n\nAnonymous thoughts about oversharing posted here are from people who recognize the pattern — the honest account of what the impulse is trying to do and what it actually produces.`,
    keywords: ["oversharing confessions anonymous", "tell too much thoughts", "emotional dumping anonymous"],
    related: ["vulnerability", "connection", "loneliness", "shame", "validation-hunger"],
  },
  {
    slug: "the-apology-that-never-came",
    title: "The Apology That Never Came",
    description: "waiting for something that won't arrive",
    shortIntro: "The accounting that was owed and never rendered.\nA debt that will not be paid.\nLearning to stop waiting for the repair that isn't coming.",
    intro: `The apology that never came is a specific open wound — the accounting for harm that was owed and never delivered. The person who hurt you, who moved on, who has perhaps never registered what they did. You've been waiting for a repair that was never going to happen. The waiting is its own ongoing damage.\n\nAnonymous thoughts about the apology that never came are from people who have been waiting — and the specific work of releasing a debt that will never be paid.`,
    keywords: ["apology never received confessions", "waiting for sorry anonymous", "no accountability thoughts"],
    related: ["forgiveness", "betrayal", "resentment", "grief", "healing"],
  },
  {
    slug: "unchosen-role",
    title: "Unchosen Role",
    description: "the function assigned before you could speak",
    shortIntro: "Becoming what the family needed rather than what you were.\nThe role enforced by the system long after anyone consciously decided.\nFinding the self underneath the function.",
    intro: `Every family system has roles — the caretaker, the scapegoat, the responsible one, the entertainer, the invisible one. These roles are assigned in childhood and enforced long after anyone has consciously decided on them. You become the role so thoroughly that finding the self underneath it is the work of years.\n\nAnonymous thoughts about unchosen roles posted here are from people who spent years being what was needed — and the specific process of locating what they actually are underneath it.`,
    keywords: ["family role confessions anonymous", "assigned role in family thoughts", "lost self in family role"],
    related: ["family", "the-good-child", "enmeshment", "identity", "people-pleasing"],
  },
  {
    slug: "the-good-child",
    title: "The Good Child",
    description: "what it cost to always be what was needed",
    shortIntro: "Performance so sustained it became the self.\nPraised for compliance so long you forgot what existed before compliance.\nThe specific loneliness of being praised for your disappearance.",
    intro: `The good child is the child who was praised for compliance, for accommodation, for being easy. The one who learned early that love was reliably available as long as they behaved correctly. This strategy works well until the person tries to exist as themselves.\n\nAnonymous thoughts about the good child posted here are from people who were very good for a very long time — and the specific grief of learning that the praise was for the performance, not the person.`,
    keywords: ["good child syndrome confessions", "compliance as survival anonymous", "praised for compliance thoughts"],
    related: ["unchosen-role", "people-pleasing", "conditional-love", "identity", "fawning"],
  },
  {
    slug: "late-diagnosis",
    title: "Late Diagnosis",
    description: "finding out what would have explained everything",
    shortIntro: "The diagnosis that arrives decades after you needed it.\nRelief because finally there is a framework.\nGrief because the years spent without it are not reclaimable.",
    intro: `Late diagnosis — of autism, ADHD, bipolar disorder, OCD, or any condition that shaped the entire arc of a life without being named — arrives with a particular combination of grief and relief. Relief because finally there is a framework. Grief because the years spent without it are not reclaimable. The diagnosis doesn't undo the history. It just makes it legible.\n\nAnonymous thoughts about late diagnosis posted here are from people processing the retroactive map — the honest account of what it means to finally have a name for the thing that was always there.`,
    keywords: ["late diagnosis thoughts anonymous", "autism diagnosis adult confessions", "ADHD diagnosis adult anonymous"],
    related: ["identity", "being-misunderstood", "shame", "grief", "self-understanding"],
  },
  {
    slug: "impermanence",
    title: "Impermanence",
    description: "knowing nothing lasts and not being at peace with it",
    shortIntro: "The background fact that keeps intruding on the foreground.\nThings end. People change. The version of your life you're in will not last.\nLiving alongside the knowledge that this will end.",
    intro: `Impermanence is the fact of change applied to everything — to relationships, to selves, to phases of life, to people. Most spiritual traditions offer frameworks for accepting it. The actual experience of sitting with impermanence without the framework is different. Things end. The version of your life you're in will not last.\n\nAnonymous thoughts about impermanence posted here are from people sitting with the fact — the honest account of living alongside the knowledge that this, too, will pass, and not always finding that comforting.`,
    keywords: ["impermanence thoughts anonymous", "nothing lasts confessions", "change and loss anonymous"],
    related: ["mortality", "grief", "change", "the-past", "existential-dread"],
  },
  {
    slug: "intellectual-loneliness",
    title: "Intellectual Loneliness",
    description: "the loneliness of thinking in ways others don't",
    shortIntro: "The specific isolation of having no one to think alongside.\nConversations that never reach the thing you're actually interested in.\nThe loneliness of an unmatched mind.",
    intro: `Intellectual loneliness is the loneliness of having a particular quality of mind that isn't often met. Not elitism — the genuine experience of conversations that never arrive at the things you find most interesting, of interests that have no natural audience, of thinking in a register that most of your daily interactions don't approach.\n\nAnonymous thoughts about intellectual loneliness posted here are from people who have mostly stopped trying to redirect conversations toward the things they care about — the honest account of the specific isolation of an unmatched mind.`,
    keywords: ["intellectual loneliness thoughts anonymous", "no one to talk to about real things", "thinking differently confessions"],
    related: ["loneliness", "connection", "being-misunderstood", "belonging", "isolation"],
  },
  {
    slug: "the-almost",
    title: "The Almost",
    description: "how close you came without ever arriving",
    shortIntro: "The thing that was nearly yours and then wasn't.\nWorse than not trying because you can see exactly what you didn't get.\nThe distance between almost and enough.",
    intro: `The almost is different from failure. It's the specific experience of proximity — coming very close to something and having it not quite happen. The job you almost got. The relationship that was almost love. The version of your life that was almost the life you wanted.\n\nAnonymous thoughts about the almost posted here are from people who have measured the distance — the honest account of what it's like to live in the proximity of things that didn't quite arrive.`,
    keywords: ["almost made it confessions anonymous", "so close but failed thoughts", "near miss life confessions"],
    related: ["regret", "failure", "the-dream-you-gave-up", "disappointment", "hope"],
  },

  // ── NEW TOPICS 76–100 ─────────────────────────────────────────────────────
  {
    slug: "hollow-victory",
    title: "Hollow Victory",
    description: "winning the thing that didn't fix anything",
    shortIntro: "Arriving at what you wanted and finding nothing there.\nYou were supposed to feel something.\nThe specific defeat of getting what you worked for.",
    intro: `Hollow victory is the disorientation that follows getting exactly what you worked for — and finding that it doesn't do what you thought it would. The promotion. The relationship. The degree. The milestone. You arrive. Nothing changes inside. You were supposed to feel something.\n\nAnonymous thoughts about hollow victory posted here are from people who made it and felt nothing — the honest account of what it's like when the destination turns out not to be the destination.`,
    keywords: ["hollow success confessions anonymous", "got what I wanted and feel empty", "achievement disappointment anonymous"],
    related: ["success", "emptiness", "purpose", "meaning", "overachievement"],
  },
  {
    slug: "shrinking",
    title: "Shrinking",
    description: "making yourself smaller so others feel larger",
    shortIntro: "The slow reduction of the self to fit the available space.\nOpinions swallowed, needs managed, voice turned down.\nHow much of you got edited out for other people's comfort.",
    intro: `Shrinking is the chronic reduction of yourself — your opinions, your space, your voice, your needs — to accommodate others. It starts as accommodation and becomes identity. The version of yourself that speaks up, takes up space, has inconvenient needs, gets slowly managed into a smaller version that causes less friction.\n\nAnonymous thoughts about shrinking posted here are from people who have become very small for someone else's benefit — the honest account of the version of yourself that got edited out.`,
    keywords: ["shrinking yourself confessions", "making myself small thoughts", "diminishing myself for others anonymous"],
    related: ["people-pleasing", "fawning", "femininity", "self-worth", "enmeshment"],
  },
  {
    slug: "magical-thinking",
    title: "Magical Thinking",
    description: "the bargains made when you have no real power",
    shortIntro: "If I do this, then that won't happen.\nRituals that keep the chaos at arm's length.\nThe private negotiations nobody knows about.",
    intro: `Magical thinking is the mind's response to situations it can't control — the rituals, the superstitions, the bargains, the if-then thinking that imposes a kind of agency on circumstances that don't actually respond to it. It's often private and always a little embarrassing. It works as long as the catastrophe doesn't come.\n\nAnonymous thoughts about magical thinking posted here are from people who bargain — the honest account of the rituals and superstitions that emerge when the stakes are high and the control is absent.`,
    keywords: ["magical thinking confessions anonymous", "superstition anxiety thoughts", "bargaining thoughts anonymous"],
    related: ["anxiety", "control", "grief", "hypervigilance", "faith-loss"],
  },
  {
    slug: "homecoming",
    title: "Homecoming",
    description: "returning to where you came from and finding it changed",
    shortIntro: "Or finding that you've changed and it hasn't.\nThe return that reveals how far you've traveled.\nThe impossibility of going back to something that exists only as memory.",
    intro: `Homecoming is the experience of returning — to a place, a person, a phase of life — and finding that the return is impossible. You can be in the location. But the version of home that existed in memory is not the version that exists now. You changed. It changed. The two changes don't produce a match.\n\nAnonymous thoughts about homecoming posted here are from people who went back — the honest account of what it's like to discover that home was partly a construction.`,
    keywords: ["returning home confessions anonymous", "home isn't what I remembered thoughts", "can't go back anonymous"],
    related: ["nostalgia", "the-past", "change", "longing", "belonging"],
  },
  {
    slug: "the-prodigal",
    title: "The Prodigal",
    description: "leaving everything and living with what was left behind",
    shortIntro: "The guilt of departure and the grief of what was cost.\nReturning to people who have a version of you that isn't you anymore.\nThe one who left, and what that means.",
    intro: `The prodigal is the one who left — the place, the family, the life that was expected. The leaving was necessary, or felt necessary. The cost was real: the people who were hurt, the relationships that didn't survive, the version of yourself that is not forgiven by everyone, including sometimes yourself.\n\nAnonymous thoughts about the prodigal experience posted here are from people who left and carry the leaving — the honest account of what it costs to have gone, and what it's like to return to people who remember a version of you that no longer exists.`,
    keywords: ["leaving family thoughts anonymous", "guilt of leaving confessions", "prodigal return anonymous"],
    related: ["estrangement", "family", "guilt", "homecoming", "change"],
  },
  {
    slug: "invisible-achievement",
    title: "Invisible Achievement",
    description: "doing well in ways that no one names",
    shortIntro: "The accomplishment that doesn't fit the categories that get recognized.\nSignificant effort in directions that don't produce visible results.\nIt happened. No one marked it.",
    intro: `Invisible achievement is the sustained effort that doesn't produce public recognition — the emotional labor, the caregiving, the quiet maintenance of things that would collapse without it, the personal growth that has no certificate. It happened. No one marked it.\n\nAnonymous thoughts about invisible achievement posted here are from people who have done significant work in directions that don't get counted — the honest account of effort that existed without being witnessed.`,
    keywords: ["invisible work confessions anonymous", "unrecognized achievement thoughts", "unseen efforts anonymous"],
    related: ["emotional-labor", "validation-hunger", "the-unwitnessed", "caregiver-exhaustion", "success"],
  },
  {
    slug: "learned-helplessness",
    title: "Learned Helplessness",
    description: "accepting defeat before the attempt",
    shortIntro: "The pattern of not trying because not trying has been taught.\nThe cage that stays in place after the door was opened.\nOverriding what has been thoroughly learned.",
    intro: `Learned helplessness is the condition of having been in situations where your actions had no effect on outcomes — long enough, repeatedly enough — that you stopped trying. The circumstances changed. The helplessness remained as an internalized pattern. The door is open. You don't move toward it because doors don't open. You've been taught.\n\nAnonymous thoughts about learned helplessness posted here are from people who recognize the pattern from the inside — the honest account of the effort required to override what has been thoroughly learned.`,
    keywords: ["learned helplessness confessions anonymous", "given up trying thoughts", "stopped trying anonymous"],
    related: ["depression", "avoidance", "chronic-underachievement", "self-worth", "change"],
  },
  {
    slug: "overqualification",
    title: "Overqualification",
    description: "being too much for the room you're actually in",
    shortIntro: "The gap between capacity and circumstance.\nYou see more, understand more, could do more — and have no outlet for it.\nThe mismatch that generates a boredom that isn't actually about boredom.",
    intro: `Overqualification is the experience of having more capacity than the situation requires or will allow. It creates a particular kind of frustration — you see more, understand more, could do more — and have no outlet for it. The room doesn't need what you have. Or doesn't want it.\n\nAnonymous thoughts about overqualification posted here are from people in rooms that don't fit them — the honest account of what it's like to be available for more than is being asked.`,
    keywords: ["overqualified confessions anonymous", "too much for this job thoughts", "wasted potential anonymous"],
    related: ["ambition", "frustration", "work", "the-dream-you-gave-up", "intellectual-loneliness"],
  },
  {
    slug: "the-performing-body",
    title: "The Performing Body",
    description: "existing as something to be looked at",
    shortIntro: "The body as object rather than subject.\nThe interior of the body secondary to its exterior.\nWhat it costs to live inside something that is primarily for other people.",
    intro: `The performing body is the experience of existing primarily in relation to others' perception — the body as the thing that is seen, evaluated, desired or not, consumed, commented on. The interior of the body — the experience of living inside it — becomes secondary to its exterior. You manage the surface for an audience that is always there.\n\nAnonymous thoughts about the performing body posted here are from people who have lived this way — the honest account of inhabiting something that belongs, in some cultural sense, to everyone but you.`,
    keywords: ["objectification thoughts anonymous", "body as performance confessions", "being looked at anonymous"],
    related: ["body", "femininity", "body-dysmorphia", "shame", "shrinking"],
  },
  {
    slug: "digital-withdrawal",
    title: "Digital Withdrawal",
    description: "the silence when the feed goes quiet",
    shortIntro: "What's left when you stop consuming.\nThe restlessness that surfaces when the scroll isn't there to cover it.\nThe self that was being managed with content, now without it.",
    intro: `Digital withdrawal is what happens when the input stops — voluntarily or not. The silence that was supposed to be restful that turns out to be disorienting. The restlessness that surfaces when the scroll isn't there to cover it. The self that was being managed with content, now without it.\n\nAnonymous thoughts about digital withdrawal posted here are from people who stopped and found something unexpected in the quiet — the honest account of the interior that was there all along, under the noise.`,
    keywords: ["digital detox thoughts anonymous", "quitting social media feelings", "phone addiction withdrawal"],
    related: ["doomscrolling", "social-media-pressure", "chosen-numbness", "rest-anxiety", "emptiness"],
  },
  {
    slug: "second-hand-life",
    title: "Second-Hand Life",
    description: "living through other people's content",
    shortIntro: "The absorption of curated experience as a substitute for your own.\nYou've been everywhere, emotionally speaking.\nYour own life, by comparison, feels underlit.",
    intro: `Second-hand life is the experience of consuming so much content about other people's lives — their travel, their relationships, their achievements, their grief — that the boundary between vicarious and actual becomes blurred. You've been everywhere, emotionally speaking. Your own life, by comparison, feels underlit.\n\nAnonymous thoughts about second-hand life posted here are from people who have been living through screens — the honest account of the life being experienced versus the life being watched.`,
    keywords: ["living through others online thoughts", "vicarious life confessions", "comparison culture anonymous"],
    related: ["doomscrolling", "comparison", "social-media-pressure", "digital-withdrawal", "emptiness"],
  },
  {
    slug: "the-unfinished-conversation",
    title: "The Unfinished Conversation",
    description: "what you still need to say to someone gone",
    shortIntro: "The words that accumulated after the chance to say them closed.\nCarrying a dialogue that has no possible conclusion.\nThe conversation continues inside, with no one on the other end.",
    intro: `The unfinished conversation is the one that never got its ending — because someone died, because the relationship ended, because the moment passed and didn't return. The things you would have said, given more time. The questions you still have. The argument never resolved. The love not fully articulated.\n\nAnonymous thoughts about the unfinished conversation posted here are from people still having it — the honest account of carrying words that have nowhere to land.`,
    keywords: ["unfinished conversation confessions anonymous", "things left unsaid anonymous", "words I never got to say"],
    related: ["grief", "loss", "the-unspoken-thing", "the-apology-that-never-came", "regret"],
  },
  {
    slug: "emotional-labor",
    title: "Emotional Labor",
    description: "the invisible work of caring for everyone else",
    shortIntro: "The emotional management performed without acknowledgment.\nThe energy spent maintaining other people's comfort.\nUnpaid, largely invisible, and producing real exhaustion.",
    intro: `Emotional labor is the work of managing your own emotions to serve the emotional needs of others — and of managing the emotional climate of a situation. It's unpaid, largely invisible, and falls disproportionately on some people. It produces real exhaustion that doesn't have a name in most contexts.\n\nAnonymous thoughts about emotional labor posted here are from people who do most of it — the honest account of the work that doesn't appear on any resume and accumulates without acknowledgment.`,
    keywords: ["emotional labor confessions anonymous", "always managing others emotions", "unpaid emotional work thoughts"],
    related: ["caregiver-exhaustion", "people-pleasing", "resentment", "overcaring", "femininity"],
  },
  {
    slug: "overcaring",
    title: "Overcaring",
    description: "giving more than you have to people who don't notice",
    shortIntro: "Love expressed as endless availability until there's nothing left.\nCare that has exceeded the sustainable limit.\nThe cost of making someone else your primary occupation.",
    intro: `Overcaring is care that has exceeded the sustainable limit — giving more than you have, in more directions than you can maintain, to people who may not be aware of what it's costing you. It's not always about the other person's demands. Often it's about an interior need to be indispensable, or a difficulty with having needs of your own.\n\nAnonymous thoughts about overcaring posted here are from people who have depleted themselves in service of others — the honest account of what it's like to give past the point of having anything left.`,
    keywords: ["overcaring confessions anonymous", "giving too much of myself thoughts", "care addiction anonymous"],
    related: ["caregiver-exhaustion", "codependency", "emotional-labor", "resentment", "people-pleasing"],
  },
  {
    slug: "chosen-numbness",
    title: "Chosen Numbness",
    description: "feeling nothing because feeling costs too much",
    shortIntro: "The deliberate shutdown of emotional experience.\nNot depression — protection.\nThe safety of not being reachable.",
    intro: `Chosen numbness is the deliberate, if often unconscious, suppression of emotional experience — not because nothing is happening but because what's happening is too much. It's the shutdown that follows overwhelming feeling. The flat affect that is not depression but protection. The decision, somewhere below the level of decision, that the exposure of feeling is more than can be borne.\n\nAnonymous thoughts about chosen numbness posted here are from people who are not feeling what they could — the honest account of what it's like to manage distance from your own interior life.`,
    keywords: ["emotional numbness confessions anonymous", "shutting down feelings thoughts", "can't feel anything anonymous"],
    related: ["dissociation", "emotional-repression", "emptiness", "depression", "trauma"],
  },
  {
    slug: "free-will",
    title: "Free Will",
    description: "whether any of what happened was actually chosen",
    shortIntro: "The question underneath every regret and every success.\nYou act as though you chose. The philosophy remains uncertain.\nLiving with actions while uncertain they were yours.",
    intro: `Free will is the question that complicates regret, responsibility, and self-understanding. Did you choose, or were you produced by everything that happened before the choice? The practical answer is that you act as though you chose. The philosophical answer is genuinely uncertain. Living inside that uncertainty — with responsibility for your actions and uncertainty about your agency — is a particular kind of discomfort.\n\nAnonymous thoughts about free will posted here are from people who have sat with the question — the honest account of living with actions while remaining uncertain whether they were truly yours.`,
    keywords: ["free will thoughts anonymous", "did I choose this confessions", "agency and determinism anonymous"],
    related: ["regret", "nihilism", "meaning", "existential-dread", "identity"],
  },
  {
    slug: "the-unlived-life",
    title: "The Unlived Life",
    description: "the version of yourself you didn't become",
    shortIntro: "All the paths that closed and the person at the end of each.\nPermanently foreclosed, not just deferred.\nGrieving a life that existed only as potential.",
    intro: `The unlived life is the accumulated collection of selves you didn't become — the person you would have been had you made different choices, lived in a different place, followed a different path. These aren't parallel lives you can visit. They're permanently foreclosed. The grief of the unlived life is the grief of foreclosed possibility.\n\nAnonymous thoughts about the unlived life posted here are from people mourning versions of themselves they'll never be — the honest account of grieving what was potential and is now simply gone.`,
    keywords: ["unlived life thoughts anonymous", "who I could have been confessions", "grieving my potential anonymous"],
    related: ["regret", "parallel-lives", "the-dream-you-gave-up", "change", "aging"],
  },
  {
    slug: "emotional-withholding",
    title: "Emotional Withholding",
    description: "the punishment that lives in silence",
    shortIntro: "Love withdrawn as a mechanism of control.\nThe calculated absence of warmth.\nChronic uncertainty: is it me? what did I do? how do I fix it?",
    intro: `Emotional withholding is the use of emotional withdrawal — the silent treatment, the withdrawal of warmth, the calculated absence of affirmation — as a means of control or punishment. It doesn't leave marks. It's difficult to name or describe to someone who hasn't experienced it. The effect is the creation of chronic uncertainty about whether you are safe, loved, or the problem.\n\nAnonymous thoughts about emotional withholding posted here are from people who have lived inside it — the honest account of what it's like to have love used as something that can be turned on and off.`,
    keywords: ["emotional withholding confessions anonymous", "silent treatment relationship thoughts", "love withdrawn as punishment"],
    related: ["emotional-abuse", "narcissistic-relationship", "trust", "shame", "conditional-love"],
  },
  {
    slug: "the-unwitnessed",
    title: "The Unwitnessed",
    description: "what happened with no one there to see",
    shortIntro: "The experiences that exist only in your account of them.\nPrivate suffering that left no external record.\nThe loneliness of an interior that no one has ever fully entered.",
    intro: `The unwitnessed is the category of experience that no one saw — the private suffering, the private victory, the things that happened in rooms where you were alone and that exist only in your account of them. To be unwitnessed is one of the deepest forms of loneliness: not just to be alone in the moment but to be alone in the record.\n\nAnonymous thoughts about the unwitnessed posted here are from people who need something to acknowledge that it happened — the honest account of experience that existed without a witness, finally placed somewhere that receives it.`,
    keywords: ["unwitnessed experience confessions", "no one saw what happened to me", "alone in my pain anonymous"],
    related: ["loneliness", "invisible-illness", "the-unspoken-thing", "connection", "grief"],
  },
  {
    slug: "after-survival",
    title: "After Survival",
    description: "who you become when the worst is finally over",
    shortIntro: "The strange territory of safety after a long emergency.\nYou expected relief. What arrives is often stranger than that.\nLearning to live without the thing that was trying to kill you.",
    intro: `After survival is a specific and underrepresented territory — what happens when the crisis is over, the danger has passed, the hard thing has ended. You expected relief. What arrives is often stranger than that: the disorientation of safety, the absence of the hypervigilance that had been your companion, the need to rebuild a self that existed in emergency mode for so long that ordinary life feels foreign.\n\nAnonymous thoughts about after survival posted here are from people on the other side — the honest account of what comes after the emergency, which is not the simple good thing it was supposed to be.`,
    keywords: ["after trauma thoughts anonymous", "surviving and what comes next", "life after the crisis confessions"],
    related: ["trauma", "healing", "hypervigilance", "change", "identity"],
  },
  {
    slug: "imposter-love",
    title: "Imposter Love",
    description: "loving a version of someone you may have invented",
    shortIntro: "The person you fell for and the person they turned out to be.\nThe idealized projection and the reality that replaced it.\nGrieving an idea that wore someone's face.",
    intro: `Imposter love is the specific grief of having loved, deeply and genuinely, a version of someone that was partly or entirely constructed — the idealized projection, the person you saw potential in that they didn't share, the self they presented before the relationship gave them less reason to. When the real person becomes visible, the love remains but its object has changed.\n\nAnonymous thoughts about imposter love posted here are from people grieving the person they fell for rather than the person who actually existed — the honest account of loving an idea that wore someone's face.`,
    keywords: ["loving someone who wasn't real confessions", "idealized love anonymous", "fell for an idea not a person"],
    related: ["love", "heartbreak", "obsession", "disappointment", "grief"],
  },
  {
    slug: "chronic-apologizing",
    title: "Chronic Apologizing",
    description: "sorry for the fact of your existence",
    shortIntro: "Apologizing before the offense, after, and for things that weren't yours.\nThe reflex of contrition detached from actual wrongdoing.\nWhat you learned about your right to exist.",
    intro: `Chronic apologizing is the reflex of contrition that has detached from actual wrongdoing. You apologize for taking up space. For having needs. For speaking. For existing in a way that inconveniences anyone. It developed as a survival strategy in environments where your presence was unwelcome or your needs were a problem. It continues in rooms that don't require it.\n\nAnonymous thoughts about chronic apologizing posted here are from people who have recognized the reflex — the honest account of what it says about how you learned to be in the world.`,
    keywords: ["chronic apologizing confessions anonymous", "always saying sorry thoughts", "excessive apology anonymous"],
    related: ["fawning", "shame", "people-pleasing", "self-worth", "conditional-love"],
  },
  {
    slug: "emotional-flooding",
    title: "Emotional Flooding",
    description: "the feeling that takes over before thought can",
    shortIntro: "The moment when the emotion becomes larger than the room.\nThe wave that is bigger than the capacity to process it.\nWhat happens in your body when too much arrives at once.",
    intro: `Emotional flooding is the experience of being physiologically overwhelmed by emotion — the moment when the wave is larger than the capacity to process it, when thought becomes inaccessible and behavior becomes reactive. It's not a character flaw. It's a nervous system response. It happens more easily to some nervous systems than others, often for reasons that predate the current situation.\n\nAnonymous thoughts about emotional flooding posted here are from people who know what it's like to be overtaken — the honest account of the moment before thought becomes possible again.`,
    keywords: ["emotional flooding thoughts anonymous", "overwhelmed by feelings confessions", "emotional dysregulation anonymous"],
    related: ["trauma", "hypervigilance", "anger", "anxiety", "dissociation"],
  },
  {
    slug: "the-returning",
    title: "The Returning",
    description: "going back to something you know will hurt you",
    shortIntro: "The pull toward what has already cost you.\nYou know where this goes. You've been here. You go back anyway.\nThe specific madness of the return you could see coming.",
    intro: `The returning is the pattern of going back — to the relationship that ended for a reason, to the behavior you've examined and understood, to the situation you've left before. You know where this goes. You've been here. The knowing doesn't prevent the going back. Something pulls you that knowledge doesn't have access to.\n\nAnonymous thoughts about the returning posted here are from people who went back and are honest about what brought them there — and what it says about the thing they haven't yet finished.`,
    keywords: ["going back to bad relationship anonymous", "returning to what hurts confessions", "can't stay away thoughts"],
    related: ["self-destruction", "addiction", "attachment-wound", "toxic-loyalty", "avoidance"],
  },
  {
    slug: "compulsive-honesty",
    title: "Compulsive Honesty",
    description: "the need to say the true thing even at cost",
    shortIntro: "Truth as compulsion rather than virtue.\nThe inability to maintain the comfortable lie.\nWhat it creates to be unable to perform the expected fiction.",
    intro: `Compulsive honesty is the need to say what is actually true even when lying would be easier, kinder, or more practical. It's not virtue. It's a compulsion — the inability to maintain fiction that costs something, the discomfort of the comfortable lie, the need for the conversation to contain what's real. It creates problems in a world that runs largely on managed truth.\n\nAnonymous thoughts about compulsive honesty posted here are from people who can't stop telling the truth — the honest account of what that costs and what it says about the interior life that generated it.`,
    keywords: ["compulsive honesty thoughts anonymous", "can't stop being honest confessions", "radical honesty anonymous"],
    related: ["vulnerability", "being-misunderstood", "secrets", "trust", "oversharing"],
  },
  {
    slug: "emotional-exile",
    title: "Emotional Exile",
    description: "living as a stranger to your own inner life",
    shortIntro: "The distance between what you feel and what you can access.\nFeelings happening somewhere just past reach.\nIn exile from yourself.",
    intro: `Emotional exile is the experience of being cut off from your own interior life — not through numbness but through something older, a fundamental disconnection from the ability to locate, name, and inhabit what you feel. You know feelings are happening somewhere. The access to them is restricted. You are in exile from yourself.\n\nAnonymous thoughts about emotional exile posted here are from people who experience this distance — the honest account of living at a remove from the interior life that is theoretically yours.`,
    keywords: ["emotional exile confessions anonymous", "disconnected from feelings thoughts", "can't access my emotions anonymous"],
    related: ["dissociation", "emotional-repression", "chosen-numbness", "identity", "emptiness"],
  },
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getSuperTopicForTopic(slug: string): SuperTopicSlug | undefined {
  return SUPER_TOPICS.find((st) => st.topics.includes(slug))?.slug;
}
