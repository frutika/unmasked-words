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
];

export function getTopic(slug: string): Topic | undefined {
  return TOPICS.find((t) => t.slug === slug);
}

export function getSuperTopicForTopic(slug: string): SuperTopicSlug | undefined {
  return SUPER_TOPICS.find((st) => st.topics.includes(slug))?.slug;
}
