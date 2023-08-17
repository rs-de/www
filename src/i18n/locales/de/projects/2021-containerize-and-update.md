### Update einer großen php Webanwendung auf eine container-basierte Installation

- **Von** PHP 5.4 mit TYPO3 Flow 3, klassische Server-Installation, RDMS-basierte Session
- **Zu** PHP 7.4 mit Neos Flow 6 und Alpine Linux basierten Docker-Container, Redis basierte Session
- **Das Gute:** Das PHP-Core-Update verlief relativ reibungslos mit einer überschaubaren Menge an erforderlichen Code-Aktualisierungen
- **Das Schlechte:** Die Template Engine (NeosFlow) war der zeitaufwändigste Teil des Update-Prozesses

Ich habe das Update innerhalb des geplanten Zeitrahmens durchgeführt und das System im Rahmen einer Schulung an ein zweites Entwicklerteam übergeben. Später war das Team in der Lage, das System zu pflegen und z. B. Versions-Updates selbst durchzuführen.
