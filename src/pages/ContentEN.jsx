import React from 'react'

export default function ContentEN() {
    const ContentSection = ({ id, title, children }) => (
        <section id={id} className="mb-16 scroll-mt-28">
            <h2 className="text-3xl font-bold text-white mb-6 border-l-4 border-[#FFA800] pl-4">{title}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-white/70">
                {children}
            </div>
        </section>
    );
    return (
        <div>
            <ContentSection id="madde-1-2" title="Parties and Subject">
                <p><strong>Article 1: Parties</strong></p>
                <p>This agreement is signed between [Your Company Name/Project Owner Address], located at [Your Company Name/Project Owner] ("Platform"), and the content creator [Artist's Name Surname/Pseudonym], residing at [Artist's Address] ("Artist"), under the following terms and conditions.</p>
                <p className="mt-4"><strong>Article 2: Subject of the Agreement</strong></p>
                <p>This agreement regulates the publication, licensing, and revenue sharing principles of original manga, animation, webtoon, and similar visual/written works ("Content") produced by the Artist on the Nekota platform and, optionally, on the Platform's YouTube channel.</p>
            </ContentSection>

            <ContentSection id="madde-3" title="Licensing and Duration">
                <p><strong>3.1. Initial Term:</strong> The Artist agrees and undertakes that the produced Content will be published exclusively on the Nekota platform for at least 1 (one) year from the date it is added to the Platform.</p>
                <p><strong>3.2. Trial Period:</strong> The Artist has the right to terminate the agreement and withdraw their Content from the platform within the first 3 (three) months from the start of the collaboration without giving any reason.</p>
                <p><strong>3.3. Extension of Duration:</strong> At the end of the 1 (one) year period, the agreement is automatically considered renewed for an indefinite period unless one of the parties initiates the termination process specified in Article 8.</p>
            </ContentSection>

            <ContentSection id="madde-4" title="Basic Revenues">
                <p><strong>4.1. Advertising Revenues:</strong> 75% of the net amount of advertising revenues (Google Ads, etc.) obtained during the display of the Artist's Content on the Nekota platform belongs to the Artist. Performance Bonus: Starting from the beginning of the Artist's second year on the Platform, if the Content has exceeded a total of 25,000 ad impressions in the previous 12-month period, the advertising revenue share rate is increased to 85%.</p>
                <p><strong>4.2. Subscription Referral Revenue:</strong> In case a new paid subscriber is brought to the Nekota platform through the referral link specifically provided to the Artist by the Platform, 75% of the net amount of the first subscription fee paid by the relevant subscriber belongs to the Artist.</p>
                <p><strong>4.3. Donation Revenues:</strong> 95% of the net amount of direct donations made by users to the Artist, after mandatory deductions such as payment processor commissions, belongs to the Artist. Full Donation Right: If the Artist reaches 5,000 active followers on the Platform and exceeds 1,000 monthly ad impressions for their Content, they gain the right to receive 100% of the revenue obtained from donations (excluding mandatory deductions).</p>
            </ContentSection>

            <ContentSection id="madde-5" title="YouTube Promotion">
                <p>If the Artist accepts this article, they will benefit from the following special conditions:</p>
                <ul className="list-disc pl-6 space-y-4">
                    <li><strong>5.1. Publication Right:</strong> The Artist allows their Content to be published on the Platform's official YouTube channel ("Main Channel").</li>
                    <li><strong>5.2. Enhanced Revenue Model:</strong> For the Artist who accepts this option, the revenue rates in Article 4 are updated as follows: Platform Ad Revenue Share (80%), Subscription Referral Revenue Share (85%), Donation Revenue Share (unconditionally 100%).</li>
                    <li><strong>5.3. Revenue Obtained from Main Channel:</strong> 75% of the net amount of YouTube ad revenues obtained from the video of the Artist's Content published on the Main Channel belongs to the Artist.</li>
                    <li><strong>5.4. Transfer of Content to Artist's Channel:</strong> After 1 year, the Artist can request the content to be transferred to their own channel, and the revenue obtained from this channel belongs entirely to them.</li>
                </ul>
            </ContentSection>

            <ContentSection id="madde-6" title="Intellectual Property">
                <p><strong>6.1. Intellectual Property Rights:</strong> All intellectual property rights (copyright, character rights, etc.) of the Content belong completely and exclusively to the Artist. With this agreement, the Artist grants the Platform a worldwide, non-transferable license to host, reproduce, distribute, display, and promote the Content for the purposes specified in this agreement.</p>
                <p><strong>6.2. Content Exclusivity:</strong> The Artist agrees not to publish each Content section submitted to the Platform on another commercial digital publishing platform (competing webtoon/manga sites, etc.) for at least 6 (six) months from the date of publication on the Platform.</p>
                <p><strong>6.3. Exceptions for Promotional Purposes:</strong> The exclusivity condition in Article 6.2 does not prevent the Artist from sharing short snippets or promotional images of the Content on their personal website, portfolio, or social media accounts (Instagram, X, Patreon, etc.).</p>
                <p><strong>6.4. Right of Priority Evaluation for New Works:</strong> When the Artist wants to commercially publish a new and independent series of works to be produced during this agreement, they agree to primarily submit this work to the Platform. The Platform has a 30 (thirty) day evaluation period to review the work and make a publication offer. If the Platform does not submit an offer at the end of this period, the Artist is free to submit the work to other platforms.</p>
            </ContentSection>

            <ContentSection id="madde-7" title="Responsibilities of the Parties">
                <p><strong>7.1. Artist's Responsibilities:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Declares and guarantees that all Content submitted to the Platform is original and does not infringe on the copyrights, trademarks, or other rights of third parties.</li>
                    <li>Ensures that the Content complies with the Platform's publishing policies and community rules.</li>
                    <li>Avoids behaviors that would damage the reputation of the Platform.</li>
                </ul>
                <p className="mt-4"><strong>7.2. Platform's Responsibilities:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Presenting the Content technically in the best way and ensuring the accessibility of the platform.</li>
                    <li>Making payments arising from revenue sharing accurately and transparently in the determined payment periods (e.g., the 15th of each month).</li>
                    <li>Providing the Artist with a control panel where they can track their revenues and content performance.</li>
                    <li>Showing reasonable effort to protect the Artist's intellectual property rights.</li>
                </ul>
            </ContentSection>

            <ContentSection id="madde-8-9" title="Termination and Confidentiality">
                <p><strong>Article 8: Termination of the Agreement</strong></p>
                <p><strong>8.1. Standard Termination Process:</strong> Except for the trial period in Article 3.2 and after the initial 1-year mandatory period is completed, either party may notify the other party in writing of their intention to terminate the agreement. Following the notification, a 3 (three) month termination process begins. The first 2 (two) months of this process are used as a reconciliation period, and the remaining 1 (one) month is used as a preparation period for removing the contents and making final calculations.</p>
                <p><strong>8.2. Termination in Special Cases:</strong> In special cases such as one of the parties heavily violating the agreement articles or engaging in illegal activities, the termination process is reduced to a 1 (one) week notification period.</p>
                <p className="mt-4"><strong>Article 9: Confidentiality</strong></p>
                <p>The parties undertake to keep confidential all non-public information learned during the collaboration, including the financial details of this agreement.</p>
            </ContentSection>

            <ContentSection id="madde-y" title="Tiered Subscription Model">
                <p>This model aims to create a regular revenue stream by allowing artists to offer special privileges to their followers for a monthly fee.</p>
                <p><strong>Y.1. Definition of the Model:</strong> The Artist can offer special content and privileges to their followers ("Subscriber") who pay a certain monthly fee using the infrastructure provided by the Platform.</p>
                <p><strong>Y.2. Artist's Responsibilities:</strong> The Artist is obliged to clearly define the advantages they will offer for each subscription tier they create and to fulfill these commitments.</p>
                <p><strong>Y.3. Revenue Sharing:</strong> 90% of the monthly gross revenue obtained from subscribers belongs to the Artist. The remaining 10% share is paid to the Platform as a service fee.</p>
                <p><strong>Y.4. Subscription Cancellation:</strong> Subscribers can terminate their subscriptions at any time. The artist must notify their intention to terminate a tier at least 30 days in advance.</p>
            </ContentSection>

            <ContentSection id="madde-z" title="Crowdfunding Model">
                <p>This model allows artists to request financial support from their communities for a specific goal (e.g., printing a manga volume).</p>
                <p><strong>Z.1. Definition of the Model:</strong> The Artist can request funds from the community by creating projects ("Project") with a specific purpose and financial target, with definite start and end dates.</p>
                <p><strong>Z.2. Project Process and Responsibilities:</strong> The Artist transparently defines the purpose, goal, and rewards of the project. Funds are kept in a secure account until the project goal is reached. If the goal is reached, the funds are transferred to the artist; if not, they are returned to the supporters.</p>
                <p><strong>Z.3. Revenue Sharing:</strong> 95% of the total gross fund collected for each successfully completed Project belongs to the Artist. The Platform receives a 5% service fee.</p>
                <p><strong>Z.4. Transparency and Communication:</strong> The Artist is obliged to communicate regularly with their supporters during the Project.</p>
            </ContentSection>

            <ContentSection id="madde-10" title="Force Majeure">
                <p>In case the parties are unable to fulfill their obligations due to force majeure events beyond their control, such as natural disasters, war, acts of terrorism, or pandemics, they will not be held responsible for this delay.</p>
            </ContentSection>

            <ContentSection id="madde-11" title="Dispute Resolution">
                <p>Turkish Law will be applied in the resolution of any dispute that may arise from the interpretation or application of this agreement, and Istanbul (Çağlayan) Courts and Execution Offices are authorized.</p>
            </ContentSection>

            <ContentSection id="madde-12" title="Entirety of Agreement">
                <p>This agreement constitutes the final and complete agreement between the parties and supersedes all previous oral or written agreements. Any changes to be made in the agreement will only be valid if signed in writing by the parties.</p>
                <p className="mt-4 italic">This agreement, consisting of 12 articles, was prepared in two copies on August 16, 2025, and signed by the parties after being read.</p>
            </ContentSection>

            {/* SECTION FOR USERS */}
            <ContentSection id="kullanici-abonelik-paketleri" title="Platform Subscription Packages">
                <p>Nekota offers various subscription packages for the needs of all users. Each package is designed to enrich your experience on the platform.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Basic Package (25₺/month)</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Ad-Free Experience:</strong> Read all content on the platform without any ad interruption.</li>
                    <li><strong>Maximum Image Quality:</strong> View all works in the highest resolution and quality uploaded by the artists.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Pro Package (50₺/month)</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Includes all features of the Basic Package.</li>
                    <li><strong>Extended Profile Limit:</strong> The maximum number of artists and series you can mark as favorites on your profile page is increased to 10.</li>
                    <li><strong>Special Artist Subscription (3 Months):</strong> You gain free access to the exclusive content of <strong>a single</strong> artist of your choice within the "Tiered Subscription Model" for 3 months. This right is valid as long as your Pro Package subscription is active and ends at the end of 3 months.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Elite Package (75₺/month)</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Includes all features of the Pro Package.</li>
                    <li><strong>Extended Special Artist Subscription (6 Months):</strong> Your right to access the exclusive content of <strong>a single</strong> artist of your choice is extended to 6 months instead of 3 months. This privilege is valid during the first 6 months that your Elite Package subscription continues.</li>
                </ul>
            </ContentSection>

            <ContentSection id="kullanici-odeme-ve-faturalandirma" title="Payment and Billing">
                <p><strong>Payment Methods:</strong> The platform accepts valid credit cards and other digital payment methods. All payments are carried out through a secure payment processor.</p>
                <p><strong>Billing Cycle:</strong> Subscription fees are automatically collected monthly or annually from the date you register, according to the plan you choose. You can manage your billing cycle and payment information from your profile settings.</p>
                <p><strong>Price Changes:</strong> The platform reserves the right to change subscription fees from time to time. A potential price change will be notified to existing subscribers via email at least 30 days before the next billing period.</p>
            </ContentSection>

            <ContentSection id="kullanici-iptal-ve-iade" title="Cancellation and Refund Policy">
                <p><strong>Subscription Cancellation:</strong> You can cancel your subscription at any time via your profile settings. After the cancellation process, you will continue to benefit from your subscription advantages until the end of your current billing period. You will not be charged for the next period.</p>
                <p><strong>Refund Policy:</strong> Unless applicable laws require otherwise, no refunds are made for paid subscription fees. When you cancel your subscription, your access to the service continues until the end of the period you paid for in advance.</p>
            </ContentSection>

            <ContentSection id="kullanici-patreon-entegrasyonu" title="Patreon Privileges">
                <p>Nekota offers special privileges to Patreon members who support the artist community. Users who provide a certain level of Patreon support can gain free access to one of the subscription packages (e.g., Pro Package) within the Platform.</p>
                <p>The details of this privilege, the Patreon support levels for which it is valid, and the activation process are announced on Nekota's official Patreon page. You can benefit from this privilege as long as your Patreon membership continues.</p>
            </ContentSection>


            <ContentSection id="rehber-profil-olusturma" title="Profile Creation and Editing">
                <p>Your profile is your digital identity in the Nekota universe. it is an area for both artists and readers to express themselves and connect with other community members.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">First Steps</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Registering:</strong> You can easily create an account with your email address or social media accounts (Google, X) by clicking the "Register" button on the home page.</li>
                    <li><strong>Username:</strong> Choose a unique username that complies with community rules. This name will appear in all your interactions on the platform.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Personalize Your Profile</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Profile and Cover Photo:</strong> You can upload a profile photo and cover photo that reflects you or your art from the "Profile Settings" page. Recommended sizes are 500x500 pixels for the profile photo and 1500x500 pixels for the cover photo.</li>
                    <li><strong>Biography:</strong> Tell other users who you are by writing a short text about yourself, your works, or your interests.</li>
                    <li><strong>Social Media Links:</strong> Add your other social media profiles (Instagram, X, Patreon, etc.) to allow your followers to reach you from other platforms as well.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-bildirim-ayarlari" title="Notification Settings">
                <p>You can personalize your notification settings so you don't miss any important developments on the platform. You can access your settings from the "Profile Settings - Notifications" tab.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Notification Types</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Email Notifications:</strong> You can choose to receive an email when an artist you follow publishes a new section, when your comments are replied to, or for important platform announcements.</li>
                    <li><strong>Push Notifications:</strong> You can receive instant notifications about new sections and important interactions via our mobile application.</li>
                    <li><strong>Notification Frequency:</strong> You can set the frequency of email notifications (instant, daily summary, weekly summary) according to your own preference.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-guvenlik-ve-sifre" title="Security and Password Operations">
                <p>The security of your account is our top priority.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Changing Password:</strong> You can change your password at any time from the "Profile Settings - Security" tab. For your security, we recommend using complex and hard-to-guess passwords.</li>
                    <li><strong>Two-Factor Authentication (2FA):</strong> You can enable 2FA to add an extra layer of security to your account. This feature requires you to enter a one-time code sent to your phone in addition to your password when logging in.</li>
                    <li><strong>Suspicious Activity:</strong> If you notice suspicious activity in your account, change your password immediately and contact our support team.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-eser-yukleme" title="Content Upload Standards (For Artists)">
                <p>It is important for your works to be viewed in the best quality by readers that you comply with the technical standards we have determined.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>File Formats:</strong> We accept `.JPG`, `.PNG`, or `.WEBP` formats for pages. We recommend `.WEBP` format for best performance.</li>
                    <li><strong>Resolution:</strong> For vertical webtoon format, we recommend the width of each image to be at least `1200px`. There is no limit on height.</li>
                    <li><strong>File Size:</strong> The size of a single image file should not exceed `2MB`. Larger files can be automatically optimized by the platform.</li>
                    <li><strong>Color Profile:</strong> All images must be saved in `sRGB` color profile for web compatibility.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-kutuphane-kullanimi" title="How to Use Library? (For Readers)">
                <p>Your library is your personal area where you can find all the series you follow, are reading, and have saved to read later.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Adding Series:</strong> You can add that series to your follow list by clicking the "Add to Library" button while on the detail page of a series.</li>
                    <li><strong>Reading Lists:</strong> You can organize your series by creating custom lists like "Reading", "To Read", "Completed" within your library.</li>
                    <li><strong>Reading Progress:</strong> The platform automatically saves the section you left off in each series, so you can easily continue from where you left off.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-cevrimdisi-okuma" title="Offline Reading Feature">
                <p>We offer an offline reading feature so you can continue your favorite series even when you don't have an internet connection. This feature is included in the Pro and Elite subscription packages.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Downloading Sections</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Download Button:</strong> While in the section list of a series, you will see a download icon next to each section. You can download the section to your device by tapping this icon.</li>
                    <li><strong>Batch Download:</strong> You can use the "Download All" option on the main page of the series to download a volume or the entire series at once.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Accessing Downloads</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>You can reach all the sections you saved for offline access from the "Downloads" section located under the "Library" tab in our mobile application.</li>
                    <li>Downloaded content is stored on your device for a certain period and may require periodic synchronization depending on factors such as your subscription status or storage space management.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-icerik-kesfetme" title="Content Discovery and Filtering">
                <p>We offer various discovery and filtering tools to make it easier for you to find your new favorite series in our large library.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Browsing by Categories and Genres:</strong> You can browse lists prepared according to popular genres like Action, Romance, Fantasy or formats like Manga, Webtoon on the "Discover" page.</li>
                    <li><strong>Tag System:</strong> Each series is defined by artists with specific tags like "Magic", "School Life", "Cyborg". You can discover other works in similar themes by clicking on these tags.</li>
                    <li><strong>Advanced Filtering:</strong> You can organize your results according to popularity, latest update date, completion status, or alphabetical order using the filtering menu on the Discover page.</li>
                    <li><strong>Smart Recommendations:</strong> Based on your reading history and the genres you like, personalized series recommendations are offered to you on your home page.</li>
                </ul>
            </ContentSection>


            <ContentSection id="topluluk-yapici-elestiri" title="How to Give Constructive Criticism?">
                <p>Nekota is a platform where artists and readers come together to discuss works. Criticism is a valuable tool that contributes to the development of artists. However, maintaining the fine line between criticism and disrespect is essential for the health of our community.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Tips for Constructive Feedback</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Be Kind and Respectful:</strong> Remember, there is a person who has spent hours of effort behind every work. Start your comments with expressions like "I think", "In my opinion" to indicate that this is a personal view.</li>
                    <li><strong>Be Specific:</strong> Instead of general expressions like "I didn't like it", explain what you liked and what you didn't with concrete examples. Detailed comments like "The character's reaction in this panel seemed a bit sudden to me because..." are more useful.</li>
                    <li><strong>Focus on Art, Not the Artist:</strong> Your criticisms should be directed at elements such as the drawing, storytelling, or character development of the work. Offensive or derogatory comments towards the artist's personality will not be tolerated.</li>
                    <li><strong>Offer Alternatives (Optional):</strong> For a point you didn't like, you can make constructive suggestions like "Maybe it could have been more effective if it was like this".</li>
                </ul>
            </ContentSection>

            <ContentSection id="topluluk-spoiler-politikasi" title="Spoiler Policy">
                <p>We have a strict policy against comments containing spoilers to protect the magic of stories and not to spoil the experience of new readers.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>What is a Spoiler?:</strong> Any information that reveals the course and surprises of the story about the yet-to-be-published sections of a work or the later parts of the current section is considered a spoiler.</li>
                    <li><strong>How to Share a Spoiler?:</strong> If you need to make a comment containing a spoiler, you should write **"SPOILER WARNING"** in capital letters at the beginning of your comment and leave the actual content a few lines below. Our platform is working on a tagging system that will automatically hide spoilers in the future.</li>
                    <li><strong>Sanctions:</strong> Comments that do not comply with the spoiler policy will be removed and the user's ability to comment may be temporarily or permanently suspended in case of repetition.</li>
                </ul>
            </ContentSection>

            <ContentSection id="topluluk-icerik-raporlama" title="How to Report Content?">
                <p>When you encounter a comment or content that you think is contrary to our community rules, you can help the platform stay safe by reporting it to our moderation team.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Report Button:</strong> Click the "Report" option from the three dots (...) menu located next to each comment.</li>
                    <li><strong>Select Report Reason:</strong> In the opening window, specify the reason for your report (Hate speech, Spoiler, Harassment, Spam, etc.). You can add a short description if you deem it necessary.</li>
                    <li><strong>Confidentiality:</strong> All reports you make are anonymous and your identity is not reported to the user you reported.</li>
                </ul>
            </ContentSection>

            <ContentSection id="topluluk-itiraz-surecleri" title="Appeal and Evaluation Processes">
                <p>Our moderation team examines all reports meticulously and impartially. When making a decision, the situation of both the reporting and reported party is taken into account.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Evaluation:</strong> A reported content is examined as to whether it violates our community rules. If a violation is detected, various sanctions from removing the content to suspending the user can be applied.</li>
                    <li><strong>Right of Appeal:</strong> If you think a sanction applied to your account or content is erroneous, you can contact us using the "Appeal" link in the notification sent to you or via our support email address. Your appeal will be re-evaluated by a different moderator.</li>
                </ul>
            </ContentSection>


            <ContentSection id="topluluk-kanal-kullanimi" title="Discord and Forum Rules">
                <p>Our official Nekota Discord server and our future forums are the main centers where the community comes together. All members are expected to comply with the following rules to maintain a positive environment on these platforms:</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">General Behavior Rules</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Be respectful and kind to all members. Harassment, bullying, discrimination, and hate speech are strictly prohibited.</li>
                    <li>Do not spam (repetitive messages), advertise, or share unauthorized links.</li>
                    <li>Do not share inappropriate (NSFW), illegal, or disturbing content.</li>
                    <li>Follow the instructions of platform moderators and administrators.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Channel Usage Purposes</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>#announcements:</strong> Used only for announcements made by the official Nekota team.</li>
                    <li><strong>#general-chat:</strong> Reserved for free conversations about the platform and general topics.</li>
                    <li><strong>#series-discussions:</strong> Use this channel for non-spoiler discussions and theories about series.</li>
                    <li><strong>#spoiler-room:</strong> Conversations containing spoilers about current sections should only be made in this channel.</li>
                    <li><strong>#artist-corner:</strong> A special area where artists share their work and interact with the community.</li>
                </ul>
            </ContentSection>

            <ContentSection id="topluluk-etkinlik-sartlari" title="Event and Contest Participation Terms">
                <p>Nekota can regularly organize events and contests to bring the community together and encourage creativity. Below are the general participation terms valid for all events:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Participation Conditions:</strong> Having an active Nekota account is usually mandatory for participation in events and contests. Additional conditions such as age limit can be specified for some events.</li>
                    <li><strong>Originality:</strong> All works (drawing, story, etc.) sent to contests must belong completely to the participant and be original. Plagiarism or stolen works are immediately disqualified.</li>
                    <li><strong>Evaluation:</strong> Winners are determined transparently according to the jury or voting system announced in advance for each event.</li>
                    <li><strong>Rewards:</strong> The delivery process and conditions of earned rewards (digital or physical) will be announced specifically for each event.</li>
                    <li><strong>Rights:</strong> The platform reserves the right to use the works sent to the contest for promotional purposes (by stating the participant's name) on its social media accounts and within the platform. The copyright of the work always remains with the artist.</li>
                    <li>The platform reserves the right to cancel any event or contest or change its rules.</li>
                </ul>
            </ContentSection>


            <ContentSection id="teknik-flutter-firebase" title="Why Flutter and Firebase?">
                <p>Nekota is built with the most up-to-date technologies to offer a modern, fast, and reliable user experience. Flutter, developed by Google, is at the core of our mobile applications.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Advantages of Flutter</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Single Code Base:</strong> Flutter allows us to develop high-performance applications from the same code base for both iOS and Android. This means we can offer new features simultaneously and consistently to both platforms.</li>
                    <li><strong>High Performance:</strong> Flutter communicates directly with the device's own graphics engine to offer fluid animations and a smooth interface, which maximizes the reading experience.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">The Power of Firebase</h4>
                <p>Our application infrastructure uses the Firebase platform, also a Google product, for critical processes such as server management, database, user authentication, and security. Firebase allows our project to scale quickly and securely.</p>
            </ContentSection>

            <ContentSection id="teknik-altyapi-guvenligi" title="Security of Our Infrastructure">
                <p>The security of our users' and artists' data is our top priority. For this purpose, we apply industry-standard security protocols.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Data Encryption:</strong> All data flow between our servers and applications is protected by SSL/TLS encryption.</li>
                    <li><strong>Secure Payments:</strong> All financial transactions are carried out through PCI-DSS compliant, leading payment processors (Stripe, Braintree, etc.). Your credit card information is never stored on our servers.</li>
                    <li><strong>Authentication:</strong> We allow you to maximize your account security with features such as strong password policies and Two-Factor Authentication (2FA).</li>
                </ul>
            </ContentSection>

            <ContentSection id="teknik-ozellik-talebi" title="How to Make a New Feature Request?">
                <p>We are developing Nekota together with our community. If you have an idea for a new feature you want to see on the platform or an improvement to an existing feature, we would be happy to hear it.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Discord Channel:</strong> You can write your idea in detail by going to the `#feature-requests` channel on our official Discord server.</li>
                    <li><strong>Voting System:</strong> You can help us decide which features we should prioritize by voting on ideas submitted by other users.</li>
                    <li><strong>Evaluation:</strong> Our developer team regularly evaluates features that are most requested and compatible with the vision of the project and adds them to our roadmap.</li>
                </ul>
            </ContentSection>

            <ContentSection id="teknik-hata-bildirme" title="Bug Reporting Process">
                <p>If you encounter an unexpected behavior or error on the platform, it is very valuable for us to report it to improve the quality of the application.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>How to Report:</strong> Please use the `#bug-reporting` channel on our Discord server or send an email directly to <a href="mailto:support@nekota.app" className="font-semibold text-[#FFA800] hover:underline">support@nekota.app</a>.</li>
                    <li><strong>Required Information:</strong> To speed up the solution of the error, please include this information: the device and operating system you are using (e.g., iPhone 14, iOS 17), a screenshot of the error, and a short description of the steps that trigger the error.</li>
                </ul>
            </ContentSection>

            <ContentSection id="teknik-katkida-bulunma" title="How You Can Contribute to the Project?">
                <p>Nekota is a project that believes in the power of community. Although our code base is not open source for now, there are many different ways you can contribute to the project:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Feedback:</strong> Using the platform actively and sharing the errors you encounter and your improvement suggestions with us is one of the biggest contributions.</li>
                    <li><strong>Community Moderation:</strong> You can help maintain a positive and constructive environment on our Discord server and in-platform discussions.</li>
                    <li><strong>Translation:</strong> In the later stages, we plan to open volunteer translation programs for your favorite series to be translated into different languages.</li>
                </ul>
            </ContentSection>

            <ContentSection id="teknik-katkida-bulunanlar" title="List of Contributors">
                <p>This project is not just ours, but the project of everyone who supports it, gives feedback, and grows our community. In the future, we will be happy to honor the names of our community members who have made significant contributions to the development of the project in this section.</p>
            </ContentSection>

            <ContentSection id="ortaklik-yayinci-marka" title="Opportunities for Publishers and Brands">
                <p>Nekota is a dynamic platform that brings together Turkey's talented artists and art-loving readers. With the collaboration models we offer for your brand or publishing house, you can be a part of this creative ecosystem.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Series Sponsorships:</strong> You can increase your brand's visibility by sponsoring a popular or promising series.</li>
                    <li><strong>Special Collections:</strong> We can create content collections specially produced by our artists, compatible with the theme of your brand.</li>
                    <li><strong>Event Partnerships:</strong> You can interact directly with your target audience by taking part in the online or physical events (contests, workshops, etc.) we organize.</li>
                </ul>
                <p className="mt-4">To get detailed information about collaboration opportunities, please contact us at <a href="mailto:partnership@nekota.app" className="font-semibold text-[#FFA800] hover:underline">partnership@nekota.app</a>.</p>
            </ContentSection>

            <ContentSection id="basin-logo-materyal" title="Logos and Visual Materials">
                <p>If you are preparing a news story, article, or content about Nekota, you can reach our high-resolution logos and visual materials representing our project in the most accurate way from here.</p>
                <div className="mt-6">
                    <a href="/press-kit.zip" download className="rounded-full bg-[#FFA800] px-6 py-3 font-bold text-black transition-opacity hover:opacity-90">
                        Download Press Kit (.zip)
                    </a>
                </div>
                <p className="mt-4 text-sm text-white/60">The use of our logos must comply with our brand identity standards. We ask you not to make changes in colors, proportions, or design.</p>
            </ContentSection>

            <ContentSection id="basin-hakkimizda" title="About Us Text and Contact">
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">About Us (Short Version)</h4>
                <p>Nekota is a next-generation digital publishing platform established to support independent comic and webtoon artists in Turkey. While ensuring that artists get a fair income from their works, it also offers a rich and diverse content library to readers.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Contact</h4>
                <p>For all your questions about press and media: <a href="mailto:press@nekota.app" className="font-semibold text-[#FFA800] hover:underline">press@nekota.app</a></p>
            </ContentSection>

            <ContentSection id="reklam-nasil-verilir" title="How to Advertise on the Platform?">
                <p>Nekota offers unique advertising opportunities for brands that want to reach a young and highly engaged audience. Our advertising models are designed with a user-friendly approach, without interrupting the reading experience.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Banner Ads:</strong> Visual banner areas located on the home page and discover sections.</li>
                    <li><strong>Sponsored Transitions Between Sections:</strong> Full-page but skippable visual ads shown between two sections.</li>
                </ul>
                <p className="mt-4">To get detailed information about our advertising options, targeting, and pricing, please contact our advertising team at <a href="mailto:advertising@nekota.app" className="font-semibold text-[#FFA800] hover:underline">advertising@nekota.app</a>.</p>
            </ContentSection>
        </div>
    )
}
