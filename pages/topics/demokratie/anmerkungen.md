## Anmerkungen

### Das Problem mit technischen Lösungen für Wahlen

Wahlen müssen dabei immer mit Papier ausgetragen werden. Software hat immer
das Problem, dass kleine Fehler/Sicherheitslücken unbemerkt eine ganze Wahl
manipulieren können. Es ist daher wichtig, dass weiterhin freiwillige
Wahlbeobachter ungehindert Zugang zum Wahlvorgang haben, um diesen unabhängig
kontrollieren zu können. Idealerweise werden alle Wahlvorgänge aufgenommen
und so zensiert, dass Personen nicht identifiziert werden können, der
restliche Vorgang aber noch erkennbar ist. Diese Aufnahmen müssen der
Öffentlichkeit zur Verfügung stehen, damit sich jeder Bürger selbst ein
Bild machen kann, sollte es zu Wahlbetrugsvorwürfen kommen.
[Hier](https://www.csail.mit.edu/news/mit-experts-no-dont-use-blockchain-vote)
ist ein Artikel des MIT, in dem erklärt wird, warum auch neue Technologien wie
Blockchain diese Probleme haben.

Es gibt hierbei viele Punkte, die man beachten muss:

#### Bugs oder absichtliche Manipulationen im Quellcode

Diese Gefahr von Fehlern im System besteht immer. Es gibt keine Bug-freie
Software und es gibt kein System ohne Sicherheitslücken. An sich ist das kein
Problem, denn, solange Kundendaten verschlüsselt sind und Backups existieren,
kann man viel Schaden verhindern. Problematisch wird es allerdings, wenn die
Software benutzt wird, um weitreichende Entscheidungen für eine Gesellschaft zu
treffen.

#### Quellcode-Verwaltung auf eigenem Server oder bei einem Anbieter

Um die Überschrift zu erklären, stelle ich zwei Möglichkeiten vor, wobei das
natürlich nur Beispiele sind:

1. Die zentrale Stelle, welche die Hoheit über Code-Änderungen hat, ist ein
   Server, der extra dafür eingerichtet wurde, z. B. ein privater GitLab-Server
2. Die zentrale Stelle, welche die Hoheit über Code-Änderungen hat, ist ein
   Anbieter wie z. B. GitHub

Das Problem der ersten Variante ist: Die Sicherheits-Architektur, das
Überwachen des Servers und Anzahl/Stärke der Backups ist deutlich schwächer
ausgebildet als bei einem Anbieter wie GitHub. Quellcode-Manipulationen sind
also einfacher möglich als bei einem großen Anbieter. Zwar erschwert der
Einsatz von der Versionierungssoftware "Git" dies zwar erheblich, schließt
diese Möglichkeit allerdings nicht aus, sondern macht dieses Thema zu einer
Ressourcenfrage. Allerdings sind die Interessensgruppen, denen direkte
Demokratie nicht passt, ressourcenreich genug, dass man diese Gefahr ernst
nehmen muss.

Das Problem der zweiten Variante ist, dass man sämtliche Kontrolle und
Überwachungsmechanismen verliert. Man ist dazu gezwungen, dem Anbieter wie z.
B. GitHub zu vertrauen. GitHub gehört Microsoft. Microsoft ist Dienstleister
für verschiedene Geheimdienste. Davon auszugehen, dass die Geheimdienste nicht
versuchen würden, eine solche Schwachstelle auszunutzen, wäre naiv.

Und wieder ist es wichtig anzumerken, dass, auch wenn die Wahrscheinlichkeit
geringer ist, als bei einer üblichen open source Software, eine Manipulation
gravierende Folgen haben könnte.

#### Angriffe außerhalb des Blockchain-Systems

Es ist wichtig, dass beim Thema Sicherheit viele Aspekte bedacht werden. Selbst
eine perfekte Software, deren Datenbanken und Server unhackbar sind und deren
Quellcode nicht bösartig manipulierbar ist, hat das Problem, dass es
Angriffsmöglichkeiten an den Schnittstellen gibt.

So wird z. B. die große Mehrheit der Benutzer für Blockchain-Wallets das
Windows-Betriebssystem benutzen. Auch hier besteht die gleiche Gefahr des
Eingriffs durch Geheimdienste wie weiter oben beschrieben. Aber auch ganz
normale Schadsoftware kann dabei ganze Wahlen beeinflussen.

Natürlich kann man sich auch hierfür Mechanismen überlegen, die das ganze sehr
viel schwerer machen, wie z. B. dedizierte Hardware-Wallets. Aber auch das kann
das Problem nicht lösen, denn die Hardware-Wallets müssen mit anderen Systemen
verbunden oder von Menschen benutzt werden.

#### Zentralisierte Software und dezentralisierte Software (Blockchain)

Der Vorteil von dezentralisierter Software liegt auf der Hand. Es gibt keine
bestimmen Server mehr, die man attackieren könnte. Dieses Problem alleine
schließt das Benutzen eines zentralen Servers aus.

Eine Blockchain-Technologie hat dabei allerdings ganz andere Probleme. Wird für
die Wahlen eine eigene Blockchain eingerichtet, entsteht das Problem, dass
Updates eine gewisse Zeit dauern und vorher erstmal ein Konsens erreicht werden
muss, wie geupdatet werden soll. Dadurch sind potenzielle Sicherheitslücken für
eine Weile weiterhin im System und blockieren dadurch das Durchführen von
Wahlen.

Dadurch, dass nur eine Lösung gewinnen kann, da das System für das ganze Land
gelten soll, kommen außerdem ganz andere Konsensprobleme auf das System zu als
bei herkömmlichen Blockchains, bei denen mehrere Forks nicht zwingender Weise
ein Problem sein müssen.

#### Die Abhängigkeit von Strom

Ein kompletter Blackout würde eine ganze Wahl unterbrechen. Ein lokaler
Blackout würde eine Wahl manipulieren. Blackouts können von Geheimdiensten
gezielt provoziert werden; das beste Beispiel hierfür war der Einsatz des
Computerwurms "Stuxnet":

> “Should we shut this thing down?” Mr. Obama asked, according to members of
> the president’s national security team who were in the room.
> Told it was unclear how much the Iranians knew about the code, and offered
> evidence that it was still causing havoc, Mr. Obama decided that the
> cyberattacks should proceed. In the following weeks, the Natanz plant was hit
> by a newer version of the computer worm, and then another after that. The
> last of that series of attacks, a few weeks after Stuxnet was detected around
> the world, temporarily took out nearly 1,000 of the 5,000 centrifuges Iran
> had spinning at the time to purify uranium.
>
> ["Obama Order Sped Up Wave of Cyberattacks Against Iran" (New York Times)](https://www.nytimes.com/2012/06/01/world/middleeast/obama-ordered-wave-of-cyberattacks-against-iran.html)
> [Archive Backups](https://web.archive.org/web/20120901000000*/https://www.nytimes.com/2012/06/01/world/middleeast/obama-ordered-wave-of-cyberattacks-against-iran.html)

### Permanentes Reflektieren

Zu guter Letzt ist es noch wichtig, dass man einen Mechanismus etabliert, der
permanent das System reflektiert, um eventuelle Schwachstellen in der
Demokratie zu erkennen; siehe Kapitel "Untergrabung der Demokratie verhindern"
oben.

## Offene Fragen

* Zwingt man in einer aleatorischen Demokratie die Ausgelosten in den Konvent
  oder können diese die Position abschlagen? Wird diese Person dann ersetzt
  oder die Größe des Konvents verkleinert?
