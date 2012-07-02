<!doctype html>
<html lang="<txp:lang />">

<head>
  <meta charset="utf-8">

<!-- page title and metas, no meta keywords as they are now obsolete -->
  <title><txp:page_title /></title>
  <meta name="description" content="">
  <meta name="generator" content="Textpattern CMS">
  <meta name="robots" content="noindex, follow, noodp, noydir">

<!-- mobile viewport optimised, more info: http://h5bp.com/viewport -->
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <txp:if_individual_article>
<!-- add meta author for individual articles -->
    <txp:meta_author title="1" />
  </txp:if_individual_article>

<!-- content feeds -->
  <txp:feed_link flavor="atom" format="link" label="Atom" />
  <txp:feed_link flavor="rss" format="link" label="RSS" />
  <txp:rsd />

<!-- specify canonical, more info: http://googlewebmastercentral.blogspot.com/2009/02/specify-your-canonical.html -->
  <txp:if_individual_article>
    <link rel="canonical" href="<txp:permlink />">
  <txp:else />
    <link rel="canonical" href="<txp:section url='1' />">
  </txp:if_individual_article>

<!-- css -->
  <!-- Google font API (remove this if you intend to use the theme in a project without internet access) -->
  <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=PT+Serif:n4,i4,n7,i7|Cousine">

  <txp:css format="link" media="" />
  <!-- or you can use (faster) external CSS files eg. <link rel="stylesheet" href="<txp:site_url />css/default.css"> -->

<!-- HTML5/Media Queries support for IE < 9 (you can remove this section and the corresponding 'js' directory files if you don't intend to support IE < 9) -->
  <!--[if lt IE 9]>
    <script src="<txp:site_url />js/html5shiv.js"></script>
    <script src="<txp:site_url />js/css3-mediaqueries.js"></script>
  <![endif]-->

</head>

<body id="<txp:section />-page">

<!-- header -->
  <header role="banner">
    <hgroup>
      <h1><txp:link_to_home><txp:site_name /></txp:link_to_home></h1>
      <h3><txp:site_slogan /></h3>
    </hgroup>
  </header>

<!-- navigation -->
  <nav role="navigation">
    <h1><txp:text item="navigation" /></h1>
    <txp:section_list default_title='<txp:text item="home" />' include_default="1" wraptag="ul" break="">
      <li<txp:if_section name='<txp:section />'> class="active"</txp:if_section>>
        <txp:section title="1" link="1" />
      </li>
    </txp:section_list>
  </nav>

  <div class="wrapper">
    <div class="container">

<!-- left (main) column -->
      <div role="main">

        <txp:if_article_list><h1><txp:section title="1" /></h1></txp:if_article_list>

        <txp:article listform="article_listing" limit="5" />
        <!-- or if you want to list all articles from all sections instead, then replace txp:article with txp:article_custom -->

        <!-- add pagination links to foot of article/article listings if there are more articles available,
          this method is more flexibile than using simple txp:link_to_prev/txp:link_to_next or txp:older/txp:newer tags -->
        <p id="paginator">

        <txp:if_individual_article>

          <txp:variable name="prev" value='<txp:link_to_prev />' />
          <txp:variable name="next" value='<txp:link_to_next />' />

          <txp:if_variable name="prev" value="">
            <span id="paginator-l" class="button disabled">&#8592; <txp:text item="older" /></span>
          <txp:else />
            <a id="paginator-l" href="<txp:link_to_prev />" title="<txp:prev_title />" class="button">&#8592; <txp:text item="older" /></a>
          </txp:if_variable>
          <txp:if_variable name="next" value="">
            <span id="paginator-r" class="button disabled"><txp:text item="newer" /> &#8594;</span>
          <txp:else />
            <a id="paginator-r" href="<txp:link_to_next />" title="<txp:next_title />" class="button"><txp:text item="newer" /> &#8594;</a>
          </txp:if_variable>

        <txp:else />

          <txp:variable name="prev" value='<txp:older />' />
          <txp:variable name="next" value='<txp:newer />' />
          <txp:if_variable name="prev" value="">
            <span id="paginator-l" class="button disabled">&#8592; <txp:text item="older" /></span>
          <txp:else />
            <a id="paginator-l" href="<txp:older />" title="<txp:text item='older' />" class="button">&#8592; <txp:text item="older" /></a>
          </txp:if_variable>
          <txp:if_variable name="next" value="">
            <span id="paginator-r" class="button disabled"><txp:text item="newer" /> &#8594;</span>
          <txp:else />
            <a id="paginator-r" href="<txp:newer />" title="<txp:text item='newer' />" class="button"><txp:text item="newer" /> &#8594;</a>
          </txp:if_variable>

        </txp:if_individual_article>

        </p>

      </div> <!-- /main -->

  <!-- right (complementary) column -->
      <div role="complementary">
        <txp:search_input /> <!-- links by default to form: 'search_input.misc.txp' unless you specify a different form -->
  
        <!-- Feed links, default flavor is rss, so we don't need to specify a flavor on the first feed_link -->
        <p><txp:feed_link label="RSS" class="feed-rss" /> / <txp:feed_link flavor="atom" label="Atom" class="feed-atom" /></p>

        <h4><txp:text item="external_links" /></h4>
        <txp:linklist wraptag="ul" break="li" limit="10" /> <!-- links by default to form: 'plainlinks.link.txp' unless you specify a different form -->
      </div> <!-- /complementary -->

    </div> <!-- /.container -->
  </div> <!-- /.wrapper -->

<!-- footer -->
  <footer role="contentinfo">
    <p><small><txp:text item="published_with" /> <a href="http://textpattern.com" rel="external" title="<txp:text item='go_txp_com' />">Textpattern CMS</a>.</small></p>
  </footer>

<!-- JavaScript at the bottom for fast page loading, more info: http://developer.yahoo.com/performance/rules.html#js_bottom -->

  <!-- add your own JavaScript here -->

</body>
</html>