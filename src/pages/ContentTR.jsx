import React from 'react'

export default function Content() {
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
            <ContentSection id="madde-1-2" title="Taraflar ve Konu">
                <p><strong>Madde 1: Taraflar</strong></p>
                <p>Bu anlaşma, bir tarafta [Şirketinizin Adı/Proje Sahibi Adresi] adresinde mukim [Şirketinizin Adı/Proje Sahibi] ("Platform") ile diğer tarafta [Sanatçının Adresi] adresinde mukim içerik üreticisi [Sanatçının Adı Soyadı/Takma Adı] ("Sanatçı") arasında aşağıdaki şartlar ve koşullar dahilinde imzalanmıştır.</p>
                <p className="mt-4"><strong>Madde 2: Anlaşmanın Konusu</strong></p>
                <p>Bu anlaşma, Sanatçı tarafından üretilen orijinal manga, animasyon, webtoon ve benzeri görsel/yazılı eserlerin ("İçerik") Nekota platformunda ve isteğe bağlı olarak Platform'un YouTube kanalında yayınlanması, lisanslanması ve bundan doğan gelirlerin paylaşım esaslarını düzenler.</p>
            </ContentSection>

            <ContentSection id="madde-3" title="Lisanslama ve Süre">
                <p><strong>3.1. İlk Süre:</strong> Sanatçı, ürettiği İçeriklerin, Platform'a eklendiği tarihten itibaren en az 1 (bir) yıl süreyle Nekota platformunda münhasıran yayınlanmasını kabul ve taahhüt eder.</p>
                <p><strong>3.2. Deneme Süresi:</strong> Sanatçı, iş birliğinin başlangıcından itibaren ilk 3 (üç) ay içerisinde herhangi bir gerekçe göstermeksizin anlaşmayı feshetme ve İçeriklerini platformdan çekme hakkına sahiptir.</p>
                <p><strong>3.3. Sürenin Uzaması:</strong> 1 (bir) yıllık sürenin sonunda, anlaşma taraflardan biri Madde 8'de belirtilen fesih sürecini başlatmadığı sürece otomatik olarak belirsiz süreli olarak yenilenmiş sayılır.</p>
            </ContentSection>

            <ContentSection id="madde-4" title="Temel Gelirler">
                <p><strong>4.1. Reklam Gelirleri:</strong> Sanatçı'nın İçeriklerinin Nekota platformunda gösterimi sırasında elde edilen reklam gelirlerinin (Google Ads, vb.) net tutarının %75'i Sanatçı'ya aittir. Performans Bonusu: Sanatçı'nın Platform'daki ikinci yılının başlangıcından itibaren, bir önceki 12 aylık dönemde İçerikleri toplamda 25.000 reklam gösterimini aşmış ise, reklam geliri payı oranı %85'e yükseltilir.</p>
                <p><strong>4.2. Abonelik Yönlendirme Geliri:</strong> Platform tarafından Sanatçı'ya özel olarak sağlanan yönlendirme linki (affiliate link) aracılığıyla Nekota platformuna yeni bir ücretli abone kazandırılması durumunda, ilgili abonenin ödediği ilk abonelik ücretinin net tutarının %75'i Sanatçı'ya aittir.</p>
                <p><strong>4.3. Bağış Gelirleri:</strong> Kullanıcıların doğrudan Sanatçı'ya yaptığı bağışların, ödeme işlemcisi komisyonları gibi zorunlu kesintiler yapıldıktan sonraki net tutarının %95'i Sanatçı'ya aittir. Tam Bağış Hakkı: Sanatçı, Platform üzerinde 5.000 aktif takipçiye ulaşması ve İçeriklerinin aylık 1.000 reklam gösterimini geçmesi durumunda, bağışlardan elde edilen gelirin (zorunlu kesintiler hariç) %100'ünü alma hakkı kazanır.</p>
            </ContentSection>

            <ContentSection id="madde-5" title="YouTube Promosyonu">
                <p>Sanatçı, bu maddeyi kabul etmesi halinde aşağıdaki özel koşullardan faydalanır:</p>
                <ul className="list-disc pl-6 space-y-4">
                    <li><strong>5.1. Yayın Hakkı:</strong> Sanatçı, İçeriklerinin Platform'un resmi YouTube kanalında ("Ana Kanal") yayınlanmasına izin verir.</li>
                    <li><strong>5.2. Geliştirilmiş Gelir Modeli:</strong> Bu seçeneği kabul eden Sanatçı için Madde 4'teki gelir oranları şu şekilde güncellenir: Platform Reklam Geliri Payı (%80), Abonelik Yönlendirme Geliri Payı (%85), Bağış Geliri Payı (şartsız %100).</li>
                    <li><strong>5.3. Ana Kanal'dan Elde Edilen Gelir:</strong> Sanatçı'nın İçeriğinin Ana Kanal'da yayınlanan videosundan elde edilen YouTube reklam gelirlerinin net tutarının %75'i Sanatçı'ya aittir.</li>
                    <li><strong>5.4. İçeriğin Sanatçı Kanalına Aktarılması:</strong> Sanatçı, 1 yıl sonra içeriğin kendi kanalına aktarılmasını talep edebilir ve bu kanaldan elde edeceği gelir tamamen kendisine aittir.</li>
                </ul>
            </ContentSection>

            <ContentSection id="madde-6" title="Fikri Mülkiyet">
                <p><strong>6.1. Fikri Mülkiyet Hakları:</strong> İçeriğin tüm fikri mülkiyet hakları (telif hakkı, karakter hakları, vb.) tamamen ve münhasıran Sanatçı'ya aittir. Sanatçı, bu anlaşma ile Platform'a, İçeriği bu anlaşmada belirtilen amaçlarla barındırma, çoğaltma, dağıtma, sergileme ve tanıtma amacıyla dünya çapında, devredilemez bir lisans vermektedir.</p>
                <p><strong>6.2. İçerik Münhasırlığı (Exclusivity):</strong> Sanatçı, Platform'a sunduğu her bir İçerik bölümünü, Platform'da yayınlandığı tarihten itibaren en az 6 (altı) ay süreyle başka bir ticari dijital yayın platformunda (rakip webtoon/manga siteleri, vb.) yayınlamamayı kabul eder.</p>
                <p><strong>6.3. Tanıtım Amaçlı İstisnalar:</strong> Madde 6.2'deki münhasırlık şartı, Sanatçı'nın kendi kişisel web sitesi, portfolyosu veya sosyal medya hesaplarında (Instagram, X, Patreon vb.) İçeriğe ait kısa kesitler veya tanıtım amaçlı görseller paylaşmasını engellemez.</p>
                <p><strong>6.4. Yeni Eserler İçin Öncelikli Değerlendirme Hakkı:</strong> Sanatçı, bu anlaşma süresince üreteceği yeni ve bağımsız bir eser serisini ticari olarak yayınlamak istediğinde, bu eseri öncelikli olarak Platform'a sunmayı kabul eder. Platform'un, eseri incelemek ve bir yayın teklifinde bulunmak için 30 (otuz) günlük bir değerlendirme süresi vardır. Bu süre sonunda Platform bir teklif sunmazsa, Sanatçı eseri başka platformlara sunmakta serbesttir.</p>
            </ContentSection>

            <ContentSection id="madde-7" title="Tarafların Sorumlulukları">
                <p><strong>7.1. Sanatçı'nın Sorumlulukları:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Platform'a sunulan tüm İçeriklerin orijinal olduğunu, üçüncü şahısların telif haklarını, ticari markalarını veya diğer haklarını ihlal etmediğini beyan ve garanti eder.</li>
                    <li>İçeriklerin Platform'un yayın politikalarına ve topluluk kurallarına uygun olmasını sağlar.</li>
                    <li>Platform'un itibarını zedeleyecek davranışlardan kaçınır.</li>
                </ul>
                <p className="mt-4"><strong>7.2. Platform'un Sorumlulukları:</strong></p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>İçerikleri teknik olarak en iyi şekilde sunmak ve platformun erişilebilirliğini sağlamak.</li>
                    <li>Gelir paylaşımından doğan ödemeleri, belirlenen ödeme dönemlerinde (örneğin her ayın 15'i) doğru ve şeffaf bir şekilde yapmak.</li>
                    <li>Sanatçı'ya, gelirlerini ve içerik performansını takip edebileceği bir kontrol paneli sağlamak.</li>
                    <li>Sanatçı'nın fikri mülkiyet haklarını korumak için makul çabayı göstermek.</li>
                </ul>
            </ContentSection>

            <ContentSection id="madde-8-9" title="Fesih ve Gizlilik">
                <p><strong>Madde 8: Anlaşmanın Feshi</strong></p>
                <p><strong>8.1. Standart Fesih Süreci:</strong> Madde 3.2'deki deneme süresi hariç ve ilk 1 yıllık zorunlu süre tamamlandıktan sonra, taraflardan herhangi biri anlaşmayı feshetme niyetini diğer tarafa yazılı olarak bildirebilir. Bildirimi takiben 3 (üç) aylık bir fesih süreci başlar. Bu sürecin ilk 2 (iki) ayı uzlaşma dönemi, kalan 1 (bir) ayı ise içeriklerin kaldırılması ve son hesaplamaların yapılması için hazırlık dönemi olarak kullanılır.</p>
                <p><strong>8.2. Özel Durumlarda Fesih:</strong> Taraflardan birinin anlaşma maddelerini ağır şekilde ihlal etmesi, yasa dışı faaliyetlerde bulunması gibi özel durumlarda, fesih süreci 1 (bir) haftalık bildirim süresine indirilir.</p>
                <p className="mt-4"><strong>Madde 9: Gizlilik</strong></p>
                <p>Taraflar, bu anlaşmanın finansal detayları da dahil olmak üzere, iş birliği sırasında öğrendikleri kamuya açık olmayan tüm bilgileri gizli tutmayı taahhüt ederler.</p>
            </ContentSection>

            <ContentSection id="madde-y" title="Katmanlı Abonelik Modeli">
                <p>Bu model, sanatçıların takipçilerine aylık bir ücret karşılığında özel ayrıcalıklar sunarak düzenli bir gelir akışı oluşturmasını hedefler.</p>
                <p><strong>Y.1. Modelin Tanımı:</strong> Sanatçı, Platform'un sağladığı altyapıyı kullanarak, aylık belirli bir ücret ödeyen takipçilerine ("Abone") özel içerik ve ayrıcalıklar sunabilir.</p>
                <p><strong>Y.2. Sanatçının Sorumlulukları:</strong> Sanatçı, oluşturduğu her abonelik katmanı için sunacağı avantajları net bir şekilde tanımlamak ve bu taahhütlerini yerine getirmekle yükümlüdür.</p>
                <p><strong>Y.3. Gelir Paylaşımı:</strong> Abonelerden elde edilen aylık brüt gelirin %90'ı Sanatçı'ya aittir. Geriye kalan %10'luk pay, Platform'a hizmet bedeli olarak ödenir.</p>
                <p><strong>Y.4. Abonelik İptali:</strong> Aboneler, aboneliklerini diledikleri zaman sonlandırabilirler. Sanatçının bir katmanı sonlandırma niyetini en az 30 gün önceden bildirmesi gerekir.</p>
            </ContentSection>

            <ContentSection id="madde-z" title="Kitle Fonlaması Modeli">
                <p>Bu model, sanatçıların belirli bir hedef doğrultusunda (örneğin bir manga cildini basmak) topluluklarından finansal destek talep etmelerini sağlar.</p>
                <p><strong>Z.1. Modelin Tanımı:</strong> Sanatçı, belirli bir amacı ve finansal hedefi olan, başlangıç ve bitiş tarihi belli projeler ("Proje") oluşturarak topluluktan fon talep edebilir.</p>
                <p><strong>Z.2. Proje Süreci ve Sorumluluklar:</strong> Sanatçı, projenin amacını, hedefini ve ödüllerini şeffaf bir şekilde tanımlar. Fonlar, proje hedefine ulaşana kadar güvenli bir hesapta tutulur. Hedefe ulaşılırsa fonlar sanatçıya aktarılır, ulaşılamazsa destekçilere iade edilir.</p>
                <p><strong>Z.3. Gelir Paylaşımı:</strong> Başarıyla tamamlanan her Proje için toplanan toplam brüt fonun %95'i Sanatçı'ya aittir. Platform, %5 oranında hizmet bedeli alır.</p>
                <p><strong>Z.4. Şeffaflık ve İletişim:</strong> Sanatçı, Proje süresince destekçileriyle düzenli olarak iletişim kurmakla yükümlüdür.</p>
            </ContentSection>

            <ContentSection id="madde-10" title="Mücbir Sebepler">
                <p>Tarafların kontrolü dışında gelişen doğal afetler, savaş, terör eylemleri, salgın hastalıklar gibi mücbir sebeplerden dolayı yükümlülüklerini yerine getirememeleri durumunda, bu gecikmeden sorumlu tutulmazlar.</p>
            </ContentSection>

            <ContentSection id="madde-11" title="Uyuşmazlıkların Çözümü">
                <p>İşbu anlaşmanın yorumlanmasından veya uygulanmasından doğabilecek her türlü uyuşmazlığın çözümünde Türk Hukuku uygulanacak olup, İstanbul (Çağlayan) Mahkemeleri ve İcra Daireleri yetkilidir.</p>
            </ContentSection>

            <ContentSection id="madde-12" title="Anlaşmanın Bütünlüğü">
                <p>İşbu anlaşma, taraflar arasındaki nihai ve tam mutabakatı teşkil eder ve daha önce yapılmış tüm sözlü veya yazılı anlaşmaların yerine geçer. Anlaşmada yapılacak herhangi bir değişiklik, ancak taraflarca yazılı olarak imzalanması halinde geçerli olur.</p>
                <p className="mt-4 italic">İşbu 12 maddeden oluşan anlaşma, 16 Ağustos 2025 tarihinde iki nüsha olarak düzenlenmiş ve taraflarca okunarak imza altına alınmıştır.</p>
            </ContentSection>

            {/* KULLANICILAR İÇİN BÖLÜMÜ */}
            <ContentSection id="kullanici-abonelik-paketleri" title="Platform Abonelik Paketleri">
                <p>Nekota, tüm kullanıcıların ihtiyaçlarına yönelik çeşitli abonelik paketleri sunar. Her paket, platformdaki deneyiminizi zenginleştirmek için tasarlanmıştır.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Temel Paket (25₺/ay)</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Reklamsız Deneyim:</strong> Platformdaki tüm içerikleri herhangi bir reklam kesintisi olmadan okuyun.</li>
                    <li><strong>Maksimum Görüntü Kalitesi:</strong> Tüm eserleri, sanatçılar tarafından yüklenen en yüksek çözünürlükte ve kalitede görüntüleyin.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Pro Paket (50₺/ay)</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Temel Paketin tüm özelliklerini içerir.</li>
                    <li><strong>Genişletilmiş Profil Limiti:</strong> Profil sayfanızda favori olarak işaretleyebileceğiniz maksimum sanatçı ve seri sayısı 10'a yükseltilir.</li>
                    <li><strong>Özel Sanatçı Aboneliği (3 Ay):</strong> Seçtiğiniz <strong>tek bir</strong> sanatçının "Katmanlı Abonelik Modeli" kapsamındaki özel içeriklerine 3 ay boyunca ücretsiz erişim hakkı kazanırsınız. Bu hak, Pro Paket aboneliğiniz aktif olduğu sürece geçerlidir ve 3 ayın sonunda sona erer.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Elit Paket (75₺/ay)</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Pro Paketin tüm özelliklerini içerir.</li>
                    <li><strong>Uzatılmış Özel Sanatçı Aboneliği (6 Ay):</strong> Seçtiğiniz <strong>tek bir</strong> sanatçının özel içeriklerine erişim hakkınız 3 ay yerine 6 aya uzatılır. Bu ayrıcalık, Elit Paket aboneliğinizin devam ettiği ilk 6 ay boyunca geçerlidir.</li>
                </ul>
            </ContentSection>

            <ContentSection id="kullanici-odeme-ve-faturalandirma" title="Ödeme ve Faturalandırma">
                <p><strong>Ödeme Yöntemleri:</strong> Platform, geçerli kredi kartları ve diğer dijital ödeme yöntemlerini kabul eder. Tüm ödemeler güvenli bir ödeme işlemcisi aracılığıyla gerçekleştirilir.</p>
                <p><strong>Faturalandırma Döngüsü:</strong> Abonelik ücretleri, kaydolduğunuz tarihten itibaren aylık veya yıllık olarak, seçtiğiniz plana göre otomatik olarak tahsil edilir. Faturalandırma döngünüzü ve ödeme bilgilerinizi profil ayarlarınızdan yönetebilirsiniz.</p>
                <p><strong>Fiyat Değişiklikleri:</strong> Platform, abonelik ücretlerini zaman zaman değiştirme hakkını saklı tutar. Olası bir fiyat değişikliği, mevcut aboneler için bir sonraki fatura döneminden önce en az 30 gün önceden e-posta yoluyla bildirilecektir.</p>
            </ContentSection>

            <ContentSection id="kullanici-iptal-ve-iade" title="İptal ve İade Politikası">
                <p><strong>Abonelik İptali:</strong> Aboneliğinizi dilediğiniz zaman profil ayarlarınız üzerinden iptal edebilirsiniz. İptal işlemi gerçekleştikten sonra, mevcut fatura döneminizin sonuna kadar abonelik avantajlarınızdan yararlanmaya devam edersiniz. Bir sonraki dönem için sizden ücret tahsil edilmez.</p>
                <p><strong>İade Politikası:</strong> Yürürlükteki yasalar aksini gerektirmedikçe, ödenen abonelik ücretleri için geri iade yapılmamaktadır. Aboneliğinizi iptal ettiğinizde, önceden ödediğiniz dönemin sonuna kadar hizmete erişiminiz devam eder.</p>
            </ContentSection>

            <ContentSection id="kullanici-patreon-entegrasyonu" title="Patreon Ayrıcalıkları">
                <p>Nekota, sanatçı topluluğunu destekleyen Patreon üyelerine özel ayrıcalıklar sunar. Belirli bir seviyede Patreon desteği sağlayan kullanıcılar, Platform içindeki abonelik paketlerinden birine (örneğin Pro Paket) ücretsiz olarak erişim hakkı kazanabilirler.</p>
                <p>Bu ayrıcalığın detayları, geçerli olduğu Patreon destek seviyeleri ve aktivasyon süreci, Nekota'nın resmi Patreon sayfasında duyurulur. Patreon üyeliğiniz devam ettiği sürece bu ayrıcalıktan faydalanabilirsiniz.</p>
            </ContentSection>


            <ContentSection id="rehber-profil-olusturma" title="Profil Oluşturma ve Düzenleme">
                <p>Profiliniz, Nekota evrenindeki dijital kimliğinizdir. Hem sanatçılar hem de okurlar için kendilerini ifade etme ve diğer topluluk üyeleriyle bağ kurma alanıdır.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">İlk Adımlar</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Kayıt Olma:</strong> Ana sayfadaki "Kayıt Ol" butonuna tıklayarak e-posta adresinizle veya sosyal medya hesaplarınızla (Google, X) kolayca bir hesap oluşturabilirsiniz.</li>
                    <li><strong>Kullanıcı Adı:</strong> Kendinize özgü ve topluluk kurallarına uygun bir kullanıcı adı seçin. Bu ad, platformdaki tüm etkileşimlerinizde görünecektir.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Profilinizi Kişiselleştirin</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Profil ve Kapak Fotoğrafı:</strong> "Profil Ayarları" sayfasından kendinizi veya sanatınızı yansıtan bir profil fotoğrafı ve kapak fotoğrafı yükleyebilirsiniz. Önerilen boyutlar profil fotoğrafı için 500x500 piksel, kapak fotoğrafı için 1500x500 pikseldir.</li>
                    <li><strong>Biyografi:</strong> Kendiniz, eserleriniz veya ilgi alanlarınız hakkında kısa bir metin yazarak diğer kullanıcılara kim olduğunuzu anlatın.</li>
                    <li><strong>Sosyal Medya Bağlantıları:</strong> Diğer sosyal medya profillerinizi (Instagram, X, Patreon vb.) ekleyerek takipçilerinizin size diğer platformlardan da ulaşmasını sağlayın.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-bildirim-ayarlari" title="Bildirim Ayarları">
                <p>Platformdaki hiçbir önemli gelişmeyi kaçırmamak için bildirim ayarlarınızı kişiselleştirebilirsiniz. Ayarlarınıza "Profil Ayarları  Bildirimler" sekmesinden ulaşabilirsiniz.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Bildirim Türleri</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>E-posta Bildirimleri:</strong> Takip ettiğiniz bir sanatçı yeni bir bölüm yayınladığında, yorumlarınıza yanıt geldiğinde veya önemli platform duyurularında e-posta almayı seçebilirsiniz.</li>
                    <li><strong>Anlık Bildirimler (Push Notifications):</strong> Mobil uygulamamız üzerinden, yeni bölümler ve önemli etkileşimler hakkında anlık bildirimler alabilirsiniz.</li>
                    <li><strong>Bildirim Sıklığı:</strong> E-posta bildirimlerinin sıklığını (anında, günlük özet, haftalık özet) kendi tercihinize göre ayarlayabilirsiniz.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-guvenlik-ve-sifre" title="Güvenlik ve Şifre İşlemleri">
                <p>Hesabınızın güvenliği bizim için en büyük önceliktir.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Şifre Değiştirme:</strong> Şifrenizi dilediğiniz zaman "Profil Ayarları  Güvenlik" sekmesinden değiştirebilirsiniz. Güvenliğiniz için karmaşık ve tahmin edilmesi zor şifreler kullanmanızı öneririz.</li>
                    <li><strong>İki Faktörlü Kimlik Doğrulama (2FA):</strong> Hesabınıza ekstra bir güvenlik katmanı eklemek için 2FA'yı etkinleştirebilirsiniz. Bu özellik, giriş yaparken şifrenize ek olarak telefonunuza gönderilen tek kullanımlık bir kodu girmenizi gerektirir.</li>
                    <li><strong>Şüpheli Aktivite:</strong> Hesabınızda şüpheli bir aktivite fark ederseniz, derhal şifrenizi değiştirin ve destek ekibimizle iletişime geçin.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-eser-yukleme" title="Eser Yükleme Standartları (Sanatçılar için)">
                <p>Eserlerinizin okurlar tarafından en iyi kalitede görüntülenmesi için belirlediğimiz teknik standartlara uymanız önemlidir.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Dosya Formatları:</strong> Sayfalar için `.JPG`, `.PNG` veya `.WEBP` formatlarını kabul ediyoruz. En iyi performans için `.WEBP` formatını öneririz.</li>
                    <li><strong>Çözünürlük:</strong> Dikey webtoon formatı için her bir görselin genişliğinin en az `1200px` olmasını tavsiye ederiz. Yükseklik konusunda bir sınırlandırma yoktur.</li>
                    <li><strong>Dosya Boyutu:</strong> Tek bir görsel dosyasının boyutu `2MB`'ı geçmemelidir. Daha büyük dosyalar platform tarafından otomatik olarak optimize edilebilir.</li>
                    <li><strong>Renk Profili:</strong> Tüm görsellerin web uyumluluğu için `sRGB` renk profilinde kaydedilmesi gerekmektedir.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-kutuphane-kullanimi" title="Kütüphane Nasıl Kullanılır? (Okurlar için)">
                <p>Kütüphaneniz, takip ettiğiniz, okumakta olduğunuz ve daha sonra okumak için kaydettiğiniz tüm serileri bir arada bulabileceğiniz kişisel alanınızdır.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Seri Ekleme:</strong> Bir serinin detay sayfasındayken "Kütüphaneye Ekle" butonuna tıklayarak o seriyi takip listenize alabilirsiniz.</li>
                    <li><strong>Okuma Listeleri:</strong> Kütüphaneniz içinde "Okunuyor", "Okunacaklar", "Tamamlananlar" gibi özel listeler oluşturarak serilerinizi organize edebilirsiniz.</li>
                    <li><strong>Okuma İlerlemesi:</strong> Platform, her seride kaldığınız bölümü otomatik olarak kaydeder, böylece kaldığınız yerden kolayca devam edebilirsiniz.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-cevrimdisi-okuma" title="Çevrimdışı Okuma Özelliği">
                <p>İnternet bağlantınız olmadığında bile favori serilerinize devam edebilmeniz için çevrimdışı okuma özelliği sunuyoruz. Bu özellik, Pro ve Elit abonelik paketlerine dahildir.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Bölümleri İndirme</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>İndirme Butonu:</strong> Bir serinin bölüm listesindeyken, her bölümün yanında bir indirme ikonu göreceksiniz. Bu ikona dokunarak bölümü cihazınıza indirebilirsiniz.</li>
                    <li><strong>Toplu İndirme:</strong> Bir cildin veya serinin tamamını tek seferde indirmek için serinin ana sayfasındaki "Tümünü İndir" seçeneğini kullanabilirsiniz.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">İndirilenlere Erişme</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Mobil uygulamamızdaki "Kütüphane" sekmesinin altında yer alan "İndirilenler" bölümünden çevrimdışı erişim için kaydettiğiniz tüm bölümlere ulaşabilirsiniz.</li>
                    <li>İndirilen içerikler, cihazınızda belirli bir süre saklanır ve aboneliğinizin durumu veya depolama alanı yönetimi gibi faktörlere bağlı olarak periyodik olarak senkronizasyon gerektirebilir.</li>
                </ul>
            </ContentSection>

            <ContentSection id="rehber-icerik-kesfetme" title="İçerik Keşfetme ve Filtreleme">
                <p>Geniş kütüphanemizde yeni favori serinizi bulmanızı kolaylaştırmak için çeşitli keşfetme ve filtreleme araçları sunuyoruz.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Kategori ve Türlere Göre Göz Atma:</strong> "Keşfet" sayfasında Aksiyon, Romantizm, Fantastik gibi popüler türlere veya Manga, Webtoon gibi formatlara göre hazırlanmış listelere göz atabilirsiniz.</li>
                    <li><strong>Etiket (Tag) Sistemi:</strong> Her seri, sanatçılar tarafından "Büyü", "Okul Hayatı", "Cyborg" gibi spesifik etiketlerle tanımlanır. Bu etiketlere tıklayarak benzer temalardaki diğer eserleri keşfedebilirsiniz.</li>
                    <li><strong>Gelişmiş Filtreleme:</strong> Keşfet sayfasındaki filtreleme menüsünü kullanarak sonuçlarınızı popülerliğe, en son güncellenme tarihine, tamamlanma durumuna veya alfabetik sıraya göre düzenleyebilirsiniz.</li>
                    <li><strong>Akıllı Öneriler:</strong> Okuma geçmişinize ve beğendiğiniz türlere dayanarak, ana sayfanızda size özel olarak kişiselleştirilmiş seri önerileri sunulur.</li>
                </ul>
            </ContentSection>


            <ContentSection id="topluluk-yapici-elestiri" title="Yapıcı Eleştiri Nasıl Yapılır?">
                <p>Nekota, sanatçıların ve okurların bir araya gelerek eserler üzerine tartıştığı bir platformdur. Eleştiriler, sanatçıların gelişimine katkı sağlayan değerli bir araçtır. Ancak, eleştiri ile saygısızlık arasındaki ince çizgiyi korumak, topluluğumuzun sağlığı için esastır.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Yapıcı Bir Geri Bildirim İçin İpuçları</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Nazik ve Saygılı Olun:</strong> Unutmayın, her eserin arkasında saatlerce emek harcayan bir insan var. Yorumlarınıza "Bence", "Benim fikrim" gibi ifadelerle başlayarak bunun kişisel bir görüş olduğunu belirtin.</li>
                    <li><strong>Spesifik Olun:</strong> "Beğenmedim" gibi genel ifadeler yerine, neyi beğenip neyi beğenmediğinizi somut örneklerle açıklayın. "Karakterin bu paneldeki tepkisi bana biraz ani geldi çünkü..." gibi detaylı yorumlar daha faydalıdır.</li>
                    <li><strong>Sanata Odaklanın, Sanatçıya Değil:</strong> Eleştirileriniz eserin çizimi, hikaye anlatımı veya karakter gelişimi gibi unsurlarına yönelik olmalıdır. Sanatçının kişiliğine yönelik saldırgan veya aşağılayıcı yorumlara tolerans gösterilmeyecektir.</li>
                    <li><strong>Alternatif Sunun (İsteğe Bağlı):</strong> Beğenmediğiniz bir nokta için "Belki şöyle olsaydı daha etkili olabilirdi" gibi yapıcı önerilerde bulunabilirsiniz.</li>
                </ul>
            </ContentSection>

            <ContentSection id="topluluk-spoiler-politikasi" title="Spoiler Politikası">
                <p>Hikayelerin büyüsünü korumak ve yeni okurların deneyimini bozmamak için spoiler (sürprizbozan) içeren yorumlara karşı katı bir politikamız vardır.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Spoiler Nedir?:</strong> Bir eserin henüz yayınlanmamış bölümleri veya güncel bölümün ilerleyen kısımları hakkında, hikayenin gidişatını ve sürprizlerini açık eden her türlü bilgi spoiler olarak kabul edilir.</li>
                    <li><strong>Spoiler Nasıl Paylaşılır?:</strong> Spoiler içeren bir yorum yapmanız gerekiyorsa, yorumunuzun başına büyük harflerle **"SPOILER UYARISI"** yazmalı ve asıl içeriği birkaç satır aşağıya bırakmalısınız. Platformumuz, gelecekte spoiler'ları otomatik olarak gizleyecek bir etiketleme sistemi üzerinde çalışmaktadır.</li>
                    <li><strong>Yaptırımlar:</strong> Spoiler politikasına uymayan yorumlar kaldırılacak ve tekrarı halinde kullanıcının yorum yapma yetkisi geçici veya kalıcı olarak askıya alınabilecektir.</li>
                </ul>
            </ContentSection>

            <ContentSection id="topluluk-icerik-raporlama" title="İçerik Nasıl Rapor Edilir?">
                <p>Topluluk kurallarımıza aykırı olduğunu düşündüğünüz bir yorum veya içerikle karşılaştığınızda, bunu moderasyon ekibimize bildirerek platformun güvenli kalmasına yardımcı olabilirsiniz.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Rapor Etme Butonu:</strong> Her yorumun yanında bulunan üç nokta (...) menüsünden "Rapor Et" seçeneğine tıklayın.</li>
                    <li><strong>Rapor Sebebini Seçin:</strong> Açılan pencerede, raporunuzun sebebini (Nefret söylemi, Spoiler, Taciz, Spam vb.) belirtin. Gerekli görürseniz kısa bir açıklama ekleyebilirsiniz.</li>
                    <li><strong>Gizlilik:</strong> Yaptığınız tüm raporlar anonimdir ve rapor ettiğiniz kullanıcıya kimliğiniz bildirilmez.</li>
                </ul>
            </ContentSection>

            <ContentSection id="topluluk-itiraz-surecleri" title="İtiraz ve Değerlendirme Süreçleri">
                <p>Moderasyon ekibimiz, yapılan tüm raporları titizlikle ve tarafsız bir şekilde inceler. Bir karar verilirken hem rapor eden hem de rapor edilen tarafın durumu göz önünde bulundurulur.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Değerlendirme:</strong> Rapor edilen bir içerik, topluluk kurallarımızı ihlal edip etmediği konusunda incelenir. İhlal tespit edilirse, içeriğin kaldırılmasından kullanıcının uzaklaştırılmasına kadar çeşitli yaptırımlar uygulanabilir.</li>
                    <li><strong>İtiraz Hakkı:</strong> Hesabınıza veya içeriğinize uygulanan bir yaptırımın hatalı olduğunu düşünüyorsanız, size gönderilen bildirimdeki "İtiraz Et" linkini kullanarak veya destek e-posta adresimiz üzerinden bizimle iletişime geçebilirsiniz. İtirazınız, farklı bir moderatör tarafından yeniden değerlendirilecektir.</li>
                </ul>
            </ContentSection>


            <ContentSection id="topluluk-kanal-kullanimi" title="Discord ve Forum Kuralları">
                <p>Resmi Nekota Discord sunucumuz ve gelecekteki forumlarımız, topluluğun bir araya geldiği ana merkezlerdir. Bu platformlarda pozitif bir ortamı sürdürmek için tüm üyelerin aşağıdaki kurallara uyması beklenir:</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Genel Davranış Kuralları</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Tüm üyelere karşı saygılı ve nazik olun. Taciz, zorbalık, ayrımcılık ve nefret söylemi kesinlikle yasaktır.</li>
                    <li>Spam (tekrarlayan mesajlar), reklam veya yetkisiz link paylaşımı yapmayın.</li>
                    <li>Uygunsuz (NSFW), yasa dışı veya rahatsız edici içerikler paylaşmayın.</li>
                    <li>Platform moderatörlerinin ve yöneticilerinin talimatlarına uyun.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Kanal Kullanım Amaçları</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>#duyurular:</strong> Sadece resmi Nekota ekibi tarafından yapılan duyurular için kullanılır.</li>
                    <li><strong>#genel-sohbet:</strong> Platform ve genel konular hakkında serbest sohbetler için ayrılmıştır.</li>
                    <li><strong>#eser-tartışmaları:</strong> Seriler hakkında spoiler içermeyen tartışmalar ve teoriler için bu kanalı kullanın.</li>
                    <li><strong>#spoiler-odası:</strong> Güncel bölümler hakkında spoiler içeren sohbetler sadece bu kanalda yapılmalıdır.</li>
                    <li><strong>#sanatçı-köşesi:</strong> Sanatçıların çalışmalarını paylaştığı ve toplulukla etkileşime girdiği özel bir alandır.</li>
                </ul>
            </ContentSection>

            <ContentSection id="topluluk-etkinlik-sartlari" title="Etkinlik ve Yarışma Katılım Şartları">
                <p>Nekota, topluluğu bir araya getirmek ve yaratıcılığı teşvik etmek için düzenli olarak etkinlikler ve yarışmalar düzenleyebilir. Tüm etkinlikler için geçerli olan genel katılım şartları aşağıdadır:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Katılım Koşulları:</strong> Etkinliklere ve yarışmalara katılım için aktif bir Nekota hesabına sahip olmak genellikle zorunludur. Bazı etkinlikler için yaş sınırı gibi ek koşullar belirtilebilir.</li>
                    <li><strong>Özgünlük:</strong> Yarışmalara gönderilen tüm eserlerin (çizim, hikaye vb.) tamamen katılımcıya ait ve özgün olması gerekmektedir. İntihal veya çalıntı eserler derhal diskalifiye edilir.</li>
                    <li><strong>Değerlendirme:</strong> Kazananlar, her etkinlik için önceden duyurulan jüri veya oylama sistemine göre şeffaf bir şekilde belirlenir.</li>
                    <li><strong>Ödüller:</strong> Kazanılan ödüllerin (dijital veya fiziksel) teslimat süreci ve koşulları her etkinlik özelinde duyurulacaktır.</li>
                    <li><strong>Haklar:</strong> Platform, yarışmaya gönderilen eserleri tanıtım amacıyla (katılımcının adını belirterek) sosyal medya hesaplarında ve platform içinde kullanma hakkını saklı tutar. Eserin telif hakkı daima sanatçıda kalır.</li>
                    <li>Platform, herhangi bir etkinliği veya yarışmayı iptal etme veya kurallarını değiştirme hakkını saklı tutar.</li>
                </ul>
            </ContentSection>

            {/* Bu bölümü, mevcut ContentSection'ların bittiği yere ekleyin */}

            <ContentSection id="teknik-flutter-firebase" title="Neden Flutter ve Firebase?">
                <p>Nekota, modern, hızlı ve güvenilir bir kullanıcı deneyimi sunmak amacıyla en güncel teknolojilerle inşa edilmiştir. Mobil uygulamalarımızın temelinde Google tarafından geliştirilen Flutter yer almaktadır.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Flutter'ın Avantajları</h4>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Tek Kod Tabanı:</strong> Flutter, hem iOS hem de Android için aynı kod tabanından yüksek performanslı uygulamalar geliştirmemizi sağlar. Bu, yeni özellikleri her iki platforma da eş zamanlı ve tutarlı bir şekilde sunabilmemiz anlamına gelir.</li>
                    <li><strong>Yüksek Performans:</strong> Flutter, doğrudan cihazın kendi grafik motoruyla iletişim kurarak akıcı animasyonlar ve pürüzsüz bir arayüz sunar, bu da okuma deneyimini en üst seviyeye çıkarır.</li>
                </ul>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Firebase'in Gücü</h4>
                <p>Uygulamamızın altyapısı, sunucu yönetimi, veritabanı, kullanıcı kimlik doğrulama ve güvenlik gibi kritik süreçler için yine Google'ın bir ürünü olan Firebase platformunu kullanır. Firebase, projemizin hızlı ve güvenli bir şekilde ölçeklenmesine olanak tanır.</p>
            </ContentSection>

            <ContentSection id="teknik-altyapi-guvenligi" title="Altyapımızın Güvenliği">
                <p>Kullanıcılarımızın ve sanatçılarımızın verilerinin güvenliği en büyük önceliğimizdir. Bu amaçla endüstri standardı güvenlik protokollerini uyguluyoruz.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Veri Şifreleme:</strong> Sunucularımız ve uygulamalarımız arasındaki tüm veri akışı, SSL/TLS şifrelemesi ile korunmaktadır.</li>
                    <li><strong>Güvenli Ödemeler:</strong> Tüm finansal işlemler, PCI-DSS uyumlu, alanında lider ödeme işlemcileri (Stripe, Braintree vb.) aracılığıyla gerçekleştirilir. Kredi kartı bilgileriniz hiçbir zaman sunucularımızda saklanmaz.</li>
                    <li><strong>Kimlik Doğrulama:</strong> Güçlü şifre politikaları ve İki Faktörlü Kimlik Doğrulama (2FA) gibi özelliklerle hesap güvenliğinizi en üst düzeye çıkarmanızı sağlıyoruz.</li>
                </ul>
            </ContentSection>

            <ContentSection id="teknik-ozellik-talebi" title="Yeni Özellik Talebi Nasıl Yapılır?">
                <p>Nekota'yı topluluğumuzla birlikte geliştiriyoruz. Platformda görmek istediğiniz yeni bir özellik veya mevcut bir özelliğin iyileştirilmesi için bir fikriniz varsa, bunu duymaktan mutluluk duyarız.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Discord Kanalı:</strong> Resmi Discord sunucumuzdaki `#özellik-talepleri` kanalına giderek fikrinizi detaylı bir şekilde yazabilirsiniz.</li>
                    <li><strong>Oylama Sistemi:</strong> Diğer kullanıcılar tarafından sunulan fikirleri oylayarak hangi özelliklere öncelik vermemiz gerektiği konusunda bize yardımcı olabilirsiniz.</li>
                    <li><strong>Değerlendirme:</strong> Geliştirici ekibimiz, en çok talep edilen ve projenin vizyonuyla uyumlu olan özellikleri düzenli olarak değerlendirir ve yol haritamıza ekler.</li>
                </ul>
            </ContentSection>

            <ContentSection id="teknik-hata-bildirme" title="Hata (Bug) Bildirme Süreci">
                <p>Platformda beklenmedik bir davranışla veya hatayla karşılaşırsanız, bunu bize bildirmeniz uygulamanın kalitesini artırmamız için çok değerlidir.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Nasıl Bildirilir:</strong> Lütfen Discord sunucumuzdaki `#hata-bildirimi` kanalını kullanın veya doğrudan <a href="mailto:destek@nekota.app" className="font-semibold text-[#FFA800] hover:underline">destek@nekota.app</a> adresine e-posta gönderin.</li>
                    <li><strong>Gerekli Bilgiler:</strong> Hatanın çözümünü hızlandırmak için lütfen şu bilgileri ekleyin: kullandığınız cihaz ve işletim sistemi (örn: iPhone 14, iOS 17), hatanın ekran görüntüsü ve hatayı tetikleyen adımların kısa bir açıklaması.</li>
                </ul>
            </ContentSection>

            <ContentSection id="teknik-katkida-bulunma" title="Projeye Nasıl Katkıda Bulunabilirsiniz?">
                <p>Nekota, topluluğun gücüne inanan bir projedir. Şu an için kod tabanımız açık kaynak olmasa da, projeye katkıda bulunabileceğiniz birçok farklı yol bulunmaktadır:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Geri Bildirim:</strong> Platformu aktif olarak kullanarak, karşılaştığınız hataları ve iyileştirme önerilerinizi bizimle paylaşmak en büyük katkılardan biridir.</li>
                    <li><strong>Topluluk Moderasyonu:</strong> Discord sunucumuzda ve platform içi tartışmalarda pozitif ve yapıcı bir ortamın korunmasına yardımcı olabilirsiniz.</li>
                    <li><strong>Çeviri:</strong> İlerleyen aşamalarda, favori serilerinizin farklı dillere çevrilmesi için gönüllü çevirmenlik programları açmayı planlıyoruz.</li>
                </ul>
            </ContentSection>

            <ContentSection id="teknik-katkida-bulunanlar" title="Katkıda Bulunanlar Listesi">
                <p>Bu proje, sadece bizim değil, onu destekleyen, geri bildirimde bulunan ve topluluğumuzu büyüten herkesin projesidir. İlerleyen zamanlarda, projenin gelişimine önemli katkılarda bulunan topluluk üyelerimizin isimlerini bu bölümde onurlandırmaktan mutluluk duyacağız.</p>
            </ContentSection>

            <ContentSection id="ortaklik-yayinci-marka" title="Yayıncılar ve Markalar için Fırsatlar">
                <p>Nekota, Türkiye'nin yetenekli sanatçıları ile sanatsever okurları buluşturan dinamik bir platformdur. Markanız veya yayıneviniz için sunduğumuz iş birliği modelleriyle, bu yaratıcı ekosistemin bir parçası olabilirsiniz.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Seri Sponsorlukları:</strong> Popüler veya gelecek vadeden bir seriye sponsor olarak markanızın görünürlüğünü artırabilirsiniz.</li>
                    <li><strong>Özel Koleksiyonlar:</strong> Markanızın temasına uygun, sanatçılarımız tarafından özel olarak üretilmiş içerik koleksiyonları oluşturabiliriz.</li>
                    <li><strong>Etkinlik Ortaklıkları:</strong> Düzenlediğimiz online veya fiziksel etkinliklerde (yarışmalar, atölyeler vb.) yer alarak hedef kitlenizle doğrudan etkileşim kurabilirsiniz.</li>
                </ul>
                <p className="mt-4">İş birliği fırsatları hakkında detaylı bilgi almak için lütfen <a href="mailto:isbirligi@nekota.app" className="font-semibold text-[#FFA800] hover:underline">isbirligi@nekota.app</a> adresinden bizimle iletişime geçin.</p>
            </ContentSection>

            <ContentSection id="basin-logo-materyal" title="Logolar ve Görsel Materyaller">
                <p>Nekota hakkında bir haber, makale veya içerik hazırlıyorsanız, projemizi en doğru şekilde temsil eden yüksek çözünürlüklü logolarımıza ve görsel materyallerimize buradan ulaşabilirsiniz.</p>
                <div className="mt-6">
                    <a href="/basin-kiti.zip" download className="rounded-full bg-[#FFA800] px-6 py-3 font-bold text-black transition-opacity hover:opacity-90">
                        Basın Kitini İndir (.zip)
                    </a>
                </div>
                <p className="mt-4 text-sm text-white/60">Logolarımızın kullanımı marka kimliği standartlarımıza uygun olmalıdır. Renklerde, oranlarda veya tasarımda değişiklik yapmamanızı rica ederiz.</p>
            </ContentSection>

            <ContentSection id="basin-hakkimizda" title="Hakkımızda Yazısı ve İletişim">
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">Hakkımızda (Kısa Versiyon)</h4>
                <p>Nekota, Türkiye'deki bağımsız çizgi roman ve webtoon sanatçılarını desteklemek amacıyla kurulmuş yeni nesil bir dijital yayıncılık platformudur. Sanatçıların eserlerinden adil bir gelir elde etmelerini sağlarken, okurlara da zengin ve çeşitli bir içerik kütüphanesi sunar.</p>
                <h4 className="text-xl font-semibold text-white mt-6 mb-2">İletişim</h4>
                <p>Basın ve medya ile ilgili tüm sorularınız için: <a href="mailto:basin@nekota.app" className="font-semibold text-[#FFA800] hover:underline">basin@nekota.app</a></p>
            </ContentSection>

            <ContentSection id="reklam-nasil-verilir" title="Platformda Nasıl Reklam Verilir?">
                <p>Nekota, genç ve etkileşimi yüksek bir kitleye ulaşmak isteyen markalar için benzersiz reklam fırsatları sunar. Reklam modellerimiz, okuma deneyimini bölmeden, kullanıcı dostu bir yaklaşımla tasarlanmıştır.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Banner Reklamları:</strong> Ana sayfa ve keşfet bölümlerinde yer alan, görsel banner alanları.</li>
                    <li><strong>Bölüm Arası Sponsorlu Geçişler:</strong> İki bölüm arasında gösterilen, tam sayfa ancak atlanabilir görsel reklamlar.</li>
                </ul>
                <p className="mt-4">Reklam seçeneklerimiz, hedefleme ve fiyatlandırma hakkında detaylı bilgi almak için lütfen <a href="mailto:reklam@nekota.app" className="font-semibold text-[#FFA800] hover:underline">reklam@nekota.app</a> adresinden reklam ekibimizle iletişime geçin.</p>
            </ContentSection>
        </div>
    )
}
