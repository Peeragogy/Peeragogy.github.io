---
title: Patterns of Peeragogy
---

Readers will have encountered *peer production*, at least in
applications like Wikipedia, StackExchange, and free/libre/open source
software development. Readers will also be familiar with *peeragogy*,
even if the name is unfamiliar. Simply put, peeragogy is active learning
together with others. Participants in a peeragogical endeavor
collaboratively build emergent structures that are responsive to their
changing context. They learn – and they adapt. Taking inspiration from
the notable successes of peer production, we are using peeragogy to help
design the future of learning, inside and outside of institutions.

We have found design patterns useful for organizing our work on this
momentous task. However, there is a difference between the pattern
language we present here and previous collections of design patterns
that touch on similar domains – like *Liberating Voices: A Pattern
Language for Communication Revolution* [11] and
*Pedagogical Patterns: Advice for Educators* [3]. At
the level of the pattern template, our innovation is simply to add a
“What’s next” annotation to each pattern, which anticipates the way the
pattern will continue to “resolve” in our work.

This mirrors the central considerations of our approach, which is all
about human interaction, and the challenges, fluidity and lack of
predictability that comes with it. Something that works for one person
may not work for another or may not even work for the same person in a
slightly different situation. Nevertheless, it is hard to argue with a
formula like “If W applies, do X to get Y.” In our view, other pattern
languages often achieve this sort of common sense rationality, and then
stop. Failure in the prescriptive model only begins when people try to
define things more carefully and make context-specific changes – when
they actually try to put ideas into practice. The problem lies in the
inevitable distance between *do as I say*, *do as I do*, and *do with
me* [7, p. 26].

<img class="displayed" src="./images/wisconsin-map.jpg" alt="Wisconsin State University" style="width: 600px;"/>

Figure 6.1. A prototypical university. Caption reads: “Wisconsin State University,
Madison, Wis. 1879”. Inset captions describe the pictured buildings:
“Ladies Hall, South Dormitory, University Hall, Assembly Halls &
Library, North Dormitory, Science Hall, President’s Residence,
University Farm, and Washburn Observatory.” Public domain.

This paper outlines a new approach to the organization of learning,
drawing on the principles of free/libre/open source software (FLOSS) and
open culture. Mako Hill suggests that one recipe for success in peer
production is to take a familiar idea – his example is an encyclopedia –
and make it easy for people to participate in building it 
[9, Chapter 1]. Another inspiring familiar idea is the university. We will
take hold of “learning in institutions” as a map (Figure 6.1),
though it does not fully conform to the tacitly-familiar territory of
peeragogy. To be clear, peeragogy is not just for teachers and students,
but for *any group of people who want to learn anything*.

Indeed, the strong version of our claim is that peeragogy is needed in
applications of any map, blueprint, or design that seeks to involve
people as people. In some idealized sense, “control” is all that’s
required to move from a well-thought-out design to successful execution.
But, at the very least, this leaves the question: where do the designs
come from in the first place [12]? Once they exist,
designs need to be interpreted, and often, revised. People may think
that they are on the same page, only to find out that their
understandings are wildly different. For example, everyone may agree
that the group needs to go “that way.” But how far? How fast? It is rare
for a project to be able to set or even define all parameters accurately
and concisely at the beginning.

This is true for pattern languages as well. We describe them in text,
but they become a “living language” [1, p. xvii] just
insofar as they are linked to action. Many things have changed since
Alexander suggested that “you will get the most ‘power’ over the
language, and make it your own most effectively, if you write the
changes in, at the appropriate places in the book” 
[1, p. xl]. We see more clearly that we can build living designs, and
inscribe their changing form not just in the margins of a book, or even
a shared wiki, but in the lifeworld itself.

Although we are often thinking about learning and adaptation that takes
place far outside of formal institutions, the historical conception of
the university can offer some guidance. The model university is not
separate from the life of the state or its citizenry, but aims to
“assume leadership in the application of knowledge for the direct
improvement of the life of the people in every sphere”
[6, p. 88]. Research that *adds to the store of
knowledge* is another fundamental obligation [6, p. 550]. Our emergent approach to collaboration and knowledge-building
is likely to be of interest to theorists in fields like organization
studies and, perhaps surprisingly, computer science, where researchers
are increasingly making use of social approaches to software design and
development (e.g., via the [Manifesto for Agile Software
Development](http://www.agilemanifesto.org/)) as well as agent-based
models of computation and learning 
[10, 5]. The design pattern community in particular is very
familiar with practices that we think of as peeragogical, notably
shepherding and writers workshops [8, 4]. We hope to help design pattern authors and researchers expand on these strengths.

The next section introduces **Peeragogy** more explicitly in the form of a
design pattern. The following sections present the other patterns in
our pattern language. Figure 6.2 illustrates their
interconnections. In each pattern description, the key forces that
apply within the pattern’s context are highlighted in bold face. Each
pattern also includes two examples. The first example shows how the
pattern is exhibited in current Wikimedia projects. We have selected
Wikimedia as a source of examples because we are relatively familiar
with it, and because the relevant data is readily available to
readers.  The second example shows how the given pattern could be
applied in the design of a future university. Whereas existing
projects like Wikimedia’s Wikiversity and the Peer-2-Peer University
(P2PU) have created “a model for lifelong learning alongside
traditional formal higher education,” they stop well short of offering
accredited degrees. What would an accredited free/libre/open
university offering general education look like? How would it compare
or contrast with the typical or stereotypical image of a university
from Figure 6.1?

Each pattern concludes with a “What’s next” annotation, and Chapter
[7](http://peeragogy.github.io/distributed_roadmap.html) collects these next steps and summarizes the
outlook of the Peeragogy project. It also sums up what’s unique about
this catalog, positioning it work as a hands-on complement to existing
sociological and historical research about peer production (surveyed in [2]).

<img class="displayed" src="./images/pattern_diagram.jpg" alt="Pattern diagram" style="width: 600px;"/>

Figure 6.2.  Connections between the patterns of peeragogy. An arrow points from pattern **A** to pattern **B** if the description of pattern **A** references pattern **B**. Labels at the borders of the figure correspond to the main sections of the *Peeragogy Handbook*.

#### References

1. Christopher Alexander, Sara Ishikawa, and Murray Silverstein. A Pattern Language: Towns, Buildings, Construction. Center for Environmental Structure Series. Oxford: Oxford University Press, 1977.
2. Yochai Benkler, Aaron Shaw, and Benjamin Mako Hill. “Peer production: a modality of collective intelligence”. In: The Collective Intelligence Handbook. Ed. by Thomas W. Malone and Michael S. Bernstein. To appear. MIT Press, 2015.
3. Joseph Bergin et al. Pedagogical patterns: Advice for educators. New York: Joseph Bergin Software Tools, 2012.
4. James O Coplien and B Woolf. “A pattern language for writ ers’ workshops”. In: C++ report 9 (1997), pp. 51–60.
5. J. Corneli et al. “Computational Poetry Workshop: Making Sense of Work in Progress”. In: Proceedings of the Sixth Inter national Conference on Computational Creativity, ICCC 2015. Ed. by Simon Colton et al. 2015. url: [http://metameso.org/~joe/docs/poetryICCC-wip.pdf](http://metameso.org/~joe/docs/poetryICCC-wip.pdf).
6. Merle Eugene Curti et al. The University of Wisconsin, a history: 1848-1925. Univ. of Wisconsin Press, 1949.
7. Gilles Deleuze. Difference and repetition. London: Bloomsbury Academic, 2004.
8. Neil B Harrison. “The Language of Shepherding”. In: Pattern Languages of Program Design 5 (1999), pp. 507–530.
9. Benjamin Mako Hill. “Essays on Volunteer Mobilization in Peer Production”. PhD thesis. Massachusetts Institute of Technology, 2013. url: [http://dspace.mit.edu/handle/1721.1/86240](http://dspace.mit.edu/handle/1721.1/86240).
10. Marvin Minsky. “Why programming is a good medium for expressing poorly understood and sloppily formulated ideas”. In: Design and Planning II-Computers in Design and Communication. Visual Committee Books. 1967, pp. 120–125.
11. Douglas Schuler. Liberating voices: A pattern language for communication revolution. Cambridge, MA: MIT Press, 2008.
12. Heinz Von Foerster. “Cybernetics of cybernetics”. In: Understanding Understanding. Springer, 2003 [1979], pp. 283–286.

